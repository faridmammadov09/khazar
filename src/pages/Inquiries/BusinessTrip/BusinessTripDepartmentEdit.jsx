import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import { getBusinessTripInquiry } from "../../../api";
import FormWrapper from "../../../components/Form/FormWrapper";
import InfoInquiryCreator from "../../../components/InfoInquiryCreator/InfoInquiryCreator";
import InputDate from "../../../components/Input/InputDate";
import Select from "../../../components/Select/Select";
import Button from "../../../components/Button/Button";

const BusinessTripDepartmentEdit = () => {
  const { id } = useParams();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      startDate: "",
      expirationDate: "",
      scannedDocument: "",
      note: "",
      result: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const fillInputs = ({ fullName, startDate, expirationDate, note }) => {
    formik.setFieldValue("fullName", fullName);
    formik.setFieldValue("startDate", startDate);
    formik.setFieldValue("expirationDate", expirationDate);
    formik.setFieldValue("note", note);
  };

  const setBusinessTripInquiry = async () => {
    const data = await getBusinessTripInquiry(id);
    fillInputs(data);
  };

  useEffect(() => {
    setBusinessTripInquiry();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container sx={{ justifyContent: "center" }} spacing={2}>
      <Grid item xs={10}>
        <InfoInquiryCreator name={formik.values.fullName} />
      </Grid>

      <Grid item xs={10}>
        <form onSubmit={formik.handleSubmit}>
          <FormWrapper title="Departament rəhbərin göndərməsi" showInfoButton>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <InputDate
                  disabled
                  label="Başlama tarixi"
                  name="startDate"
                  value={formik.values.startDate}
                  onChange={(newValue) =>
                    formik.setFieldValue("startDate", newValue)
                  }
                />
              </Grid>

              <Grid item xs={6}>
                <InputDate
                  disabled
                  label="Bitmə tarixi"
                  name="expirationDate"
                  value={formik.values.expirationDate}
                  onChange={(newValue) =>
                    formik.setFieldValue("expirationDate", newValue)
                  }
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
                <TextField
                  disabled
                  fullWidth
                  type="text"
                  label="Qeyd"
                  name="note"
                  value={formik.values.note}
                  onChange={formik.handleChange}
                ></TextField>
              </Grid>

              <Grid item xs={12}>
                <Select
                  required
                  label="Nəticə"
                  options={["HR göndərməsi"]}
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
              Yadda saxla və Yönləndir
            </Button>
          </Stack>
        </form>
      </Grid>
    </Grid>
  );
};

export default BusinessTripDepartmentEdit;
