import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import { getVacationInquiry } from "../../../api";
import FormWrapper from "../../../components/Form/FormWrapper";
import InfoInquiryCreator from "../../../components/InfoInquiryCreator/InfoInquiryCreator";
import InputDate from "../../../components/Input/InputDate";
import Select from "../../../components/Select/Select";
import Button from "../../../components/Button/Button";

const VacationHrEdit = () => {
  const { id } = useParams();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      startDate: "",
      expirationDate: "",
      scannedDocument: "",
      result: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const fillInputs = async () => {
    const { fullName, startDate, expirationDate } = await getVacationInquiry(
      id
    );

    formik.setFieldValue("fullName", fullName);
    formik.setFieldValue("startDate", startDate);
    formik.setFieldValue("expirationDate", expirationDate);
  };

  useEffect(() => {
    fillInputs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container sx={{ justifyContent: "center" }} spacing={2}>
      <Grid item xs={10}>
        <InfoInquiryCreator name={formik.values.fullName} />
      </Grid>

      <Grid item xs={10}>
        <form onSubmit={formik.handleSubmit}>
          <FormWrapper title="HR göndərməsi" showInfoButton showDownloadButton>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <InputDate
                  disabled
                  label="Başlama tarixi"
                  name="startDate"
                  value={formik.values.startDate}
                  onChange={(newValue) => {
                    formik.setFieldValue("startDate", newValue);
                  }}
                />
              </Grid>

              <Grid item xs={6}>
                <InputDate
                  disabled
                  label="Bitmə tarixi"
                  name="expirationDate"
                  value={formik.values.expirationDate}
                  onChange={(newValue) => {
                    formik.setFieldValue("expirationDate", newValue);
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  disabled
                  fullWidth
                  type="text"
                  label="Skan edilmiş sənəd"
                  name="scannedDocument"
                  value={formik.values.scannedDocument}
                  onChange={formik.handleChange}
                ></TextField>
              </Grid>

              <Grid item xs={12}>
                <Select
                  required
                  label="Nəticə"
                  options={["Təsdiqləndi"]}
                  name="result"
                  value={formik.values.result}
                  onChange={formik.handleChange}
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
