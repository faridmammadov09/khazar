import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { getGuestInquiry } from "../../../api";
import FormWrapper from "../../../components/Form/FormWrapper";
import InfoInquiryCreator from "../../../components/InfoInquiryCreator/InfoInquiryCreator";
import InputDate from "../../../components/Input/InputDate";
import Select from "../../../components/Select/Select";
import Button from "../../../components/Button/Button";
import Autocomplete from "../../../components/Input/Autocomplete";
import GuestAccordion from "../../../components/Accordion/GuestAccordion";

const GuestEmployeeEdit = () => {
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
  }, []);

  return (
    <Grid container sx={{ justifyContent: "center" }} spacing={2}>
      <Grid item xs={10}>
        <InfoInquiryCreator name={formik.values.fullName} />
      </Grid>

      <Grid item xs={10}>
        <form onSubmit={formik.handleSubmit}>
          <FormWrapper title="NBM əməkdaşın göndərməsi" showInfoButton>
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
                    formik.setFieldValue(newValue);
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
                <Typography
                  variant="subtitle1"
                  sx={{ fontSize: "18px", fontWeight: "700" }}
                >
                  Qonaqlar
                </Typography>

                {/* <GuestAccordion id="guest-1" title="Orxan Axnazarov" />
                <GuestAccordion id="guest-2" title="İlqar Abbasov" />
                <GuestAccordion id="guest-3" title="Zümrüd Huseynova" /> */}
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
            <Button primary>Yadda saxla</Button>
            <Button type="submit" primary>
              Yadda saxla və Bitir
            </Button>
          </Stack>
        </form>
      </Grid>
    </Grid>
  );
};

export default GuestEmployeeEdit;
