import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Stack, TextField } from "@mui/material";
import API from "../../../api";
import FormWrapper from "../../../components/Form/FormWrapper";
import InfoInquiryCreator from "../../../components/InfoInquiryCreator/InfoInquiryCreator";
import InputDate from "../../../components/Input/InputDate";
import Select from "../../../components/Select/Select";
import Button from "../../../components/Button/Button";
import Autocomplete from "../../../components/Input/Autocomplete";

const GuestChiefEdit = () => {
  const { id } = useParams();
  const [fullName, setFullName] = useState("");
  const [comingPeople, setComingPeople] = useState([]);
  const [transportationNotes, setTransportationNotes] = useState([]);
  const [arrivalDate, setArrivalDate] = useState("");
  const [reasonForComing, setReasonForComing] = useState("");
  const [note, setNote] = useState("");
  const [result, setResult] = useState("");

  const fillInputs = ({
    fullName,
    comingPeople,
    transportationNotes,
    arrivalDate,
    reasonForComing,
    note,
  }) => {
    setFullName(fullName);
    setComingPeople(comingPeople);
    setTransportationNotes(transportationNotes);
    setArrivalDate(arrivalDate);
    setReasonForComing(reasonForComing);
    setNote(note);
  };

  const getInquiry = async () => {
    const { data } = await API.get(`guests/${id}`);
    fillInputs(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  useEffect(() => {
    getInquiry();
  }, []);

  return (
    <Grid container sx={{ justifyContent: "center" }} spacing={2}>
      <Grid item xs={10}>
        <InfoInquiryCreator name={fullName} />
      </Grid>

      <Grid item xs={10}>
        <form onSubmit={handleSubmit}>
          <FormWrapper title="NBM rəisin göndərməsi" showInfoButton>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Autocomplete
                  label="Gələcək şəxs"
                  value={comingPeople}
                  options={[
                    "İlqar Abbasov",
                    "Orxan Axnazarov",
                    "Zumrud Huseynova",
                    "Ceyhun Əhmədli",
                  ]}
                  onChange={(event, newValue) => {
                    setComingPeople(newValue);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  label="Nəqliyyatı ilə bağlı qeyd"
                  value={transportationNotes}
                  options={["00-AS-000", "00-AS-001", "00-AS-002", "00-AS-003"]}
                  onChange={(event, newValue) => {
                    setTransportationNotes(newValue);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <InputDate
                  required
                  label="Gəlmə tarixi"
                  value={arrivalDate}
                  onChange={(newValue) => setArrivalDate(newValue)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  type="text"
                  label="Gəlmə səbəbi"
                  fullWidth
                  value={reasonForComing}
                  onChange={(e) => setReasonForComing(e.target.value)}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  type="text"
                  label="Qeyd"
                  fullWidth
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <Select
                  required
                  label="Nəticə"
                  value={result}
                  onChange={(value) => setResult(value)}
                  options={["NBM əməkdaşın göndərməsi"]}
                />
              </Grid>
            </Grid>
          </FormWrapper>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="flex-end"
            sx={{ py: 2 }}
          >
            <Button type="submit" primary>
              Yadda saxla və Yönləndir
            </Button>
          </Stack>
        </form>
      </Grid>
    </Grid>
  );
};

export default GuestChiefEdit;
