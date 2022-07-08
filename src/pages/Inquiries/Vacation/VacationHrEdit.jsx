import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Stack, TextField } from "@mui/material";
import API from "../../../api";
import FormWrapper from "../../../components/Form/FormWrapper";
import InfoInquiryCreator from "../../../components/InfoInquiryCreator/InfoInquiryCreator";
import InputDate from "../../../components/Input/InputDate";
import Select from "../../../components/Select/Select";
import Button from "../../../components/Button/Button";

const VacationHrEdit = () => {
  const { id } = useParams();
  const [fullName, setFullName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [scannedDocument, setScannedDocument] = useState("");
  const [result, setResult] = useState("");

  const fillInputs = ({ fullName, startDate, expirationDate }) => {
    setFullName(fullName);
    setStartDate(startDate);
    setExpirationDate(expirationDate);
  };

  const getInquiry = async () => {
    const { data } = await API.get(`vacationInfo/${id}`);
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
          <FormWrapper title="HR göndərməsi" showInfoButton showDownloadButton>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <InputDate
                  disabled
                  label="Başlama tarixi"
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                />
              </Grid>
              <Grid item xs={6}>
                <InputDate
                  disabled
                  label="Bitmə tarixi"
                  value={expirationDate}
                  onChange={(newValue) => setExpirationDate(newValue)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  disabled
                  type="text"
                  label="Skan edilmiş sənəd"
                  fullWidth
                  value={scannedDocument}
                  onChange={(e) => setScannedDocument(e.target.value)}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <Select
                  required
                  label="Nəticə"
                  value={result}
                  onChange={(value) => setResult(value)}
                  options={["Təstiqləndi"]}
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
              Yadda saxla və Bitir
            </Button>
          </Stack>
        </form>
      </Grid>
    </Grid>
  );
};

export default VacationHrEdit;
