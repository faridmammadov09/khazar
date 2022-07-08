import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Stack } from "@mui/material";
import API from "../../../api";
import FormWrapper from "../../../components/Form/FormWrapper";
import InfoInquiryCreator from "../../../components/InfoInquiryCreator/InfoInquiryCreator";
import InputDate from "../../../components/Input/InputDate";
import Select from "../../../components/Select/Select";
import Button from "../../../components/Button/Button";

const DayOffHrEdit = () => {
  const { id } = useParams();
  const [fullName, setFullName] = useState("");
  const [dayOffDate, setDayOffDate] = useState("");
  const [type, setType] = useState("");
  const [result, setResult] = useState("");

  const fillInputs = ({ fullName, date, type }) => {
    setFullName(fullName);
    setDayOffDate(date);
    setType(type);
  };

  const getInquiry = async () => {
    const { data } = await API.get(`dayOffs/${id}`);
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
          <FormWrapper title="HR göndərməsi" showInfoButton>
            <Stack spacing={2}>
              <InputDate
                disabled
                label="Day off tarixi"
                value={dayOffDate}
                onChange={(newValue) => setDayOffDate(newValue)}
              />

              <Select
                disabled
                label="Növü"
                value={type}
                onChange={(value) => setType(value)}
                options={["Təstiqləndi"]}
              />

              <Select
                label="Nəticə"
                value={result}
                onChange={(value) => setResult(value)}
                options={["Təstiqləndi"]}
              />
            </Stack>
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

export default DayOffHrEdit;
