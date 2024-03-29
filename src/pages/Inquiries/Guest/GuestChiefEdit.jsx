import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import { getGuestInquiry } from "../../../api";
import FormWrapper from "../../../components/Form/FormWrapper";
import InfoInquiryCreator from "../../../components/InfoInquiryCreator/InfoInquiryCreator";
import InputDate from "../../../components/Input/InputDate";
import Select from "../../../components/Select/Select";
import Button from "../../../components/Button/Button";
import Autocomplete from "../../../components/Input/Autocomplete";

const GuestChiefEdit = () => {
  const { id } = useParams();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      comingPeople: [],
      transportationNotes: [],
      arrivalDate: "",
      reasonForComing: "",
      note: "",
      result: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const fillInputs = ({
    fullName,
    comingPeople,
    transportationNotes,
    arrivalDate,
    reasonForComing,
    note,
  }) => {
    formik.setFieldValue("fullName", fullName);
    formik.setFieldValue("comingPeople", comingPeople);
    formik.setFieldValue("transportationNotes", transportationNotes);
    formik.setFieldValue("arrivalDate", arrivalDate);
    formik.setFieldValue("reasonForComing", reasonForComing);
    formik.setFieldValue("note", note);
  };

  const setGuestInquiry = async () => {
    const data = await getGuestInquiry(id);
    fillInputs(data);
  };

  useEffect(() => {
    setGuestInquiry();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container sx={{ justifyContent: "center" }} spacing={2}>
      <Grid item xs={10}>
        <InfoInquiryCreator name={formik.values.fullName} />
      </Grid>

      <Grid item xs={10}>
        <form onSubmit={formik.handleSubmit}>
          <FormWrapper title="NBM rəisin göndərməsi" showInfoButton>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Autocomplete
                  required
                  label="Gələcək şəxs"
                  options={[
                    "İlqar Abbasov",
                    "Orxan Axnazarov",
                    "Zumrud Huseynova",
                    "Ceyhun Əhmədli",
                  ]}
                  name="comingPeople"
                  value={formik.values.comingPeople}
                  onChange={(event, newValue) => {
                    formik.setFieldValue("comingPeople", newValue);
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  required
                  label="Nəqliyyatı ilə bağlı qeyd"
                  options={["00-AS-000", "00-AS-001", "00-AS-002", "00-AS-003"]}
                  name="transportationNotes"
                  value={formik.values.transportationNotes}
                  onChange={(event, newValue) => {
                    formik.setFieldValue("transportationNotes", newValue);
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <InputDate
                  required
                  label="Gəlmə tarixi"
                  name="arrivalDate"
                  value={formik.values.arrivalDate}
                  onChange={(newValue) => {
                    formik.setFieldValue("arrivalDate", newValue);
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="text"
                  label="Gəlmə səbəbi"
                  name="reasonForComing"
                  value={formik.values.reasonForComing}
                  onChange={formik.handleChange}
                ></TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
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
                  options={["NBM əməkdaşın göndərməsi"]}
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

export default GuestChiefEdit;
