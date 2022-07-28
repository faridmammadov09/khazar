import { useState } from "react";
import { Grid, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import Button from "../../../components/Button/Button";
import FormWrapper from "../../../components/Form/FormWrapper";
import Select from "../../../components/Select/Select";
import Tabs from "../../../components/Tabs/Tabs";
import InputDate from "../../../components/Input/InputDate";
import Autocomplete from "../../../components/Input/Autocomplete";

const TABS = [{ label: "Sorğunun formalaşdırılması", path: "" }];

const GuestNew = () => {
  const [currentTab, setCurrentTab] = useState("");

  const formik = useFormik({
    initialValues: {
      comingPeople: [],
      transportationNotes: [],
      arrivalDate: "",
      meetingPerson: "",
      reasonForComing: "",
      note: "",
      result: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Stack spacing={3}>
      <Tabs
        tabs={TABS}
        currentTab={currentTab}
        onChangeCurrentTab={(event, newValue) => setCurrentTab(newValue)}
      />

      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item xs={10}>
          <form onSubmit={formik.handleSubmit}>
            <FormWrapper title="Sorğunun formalaşdırılması">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Autocomplete
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
                    label="Nəqliyyatı ilə bağlı qeyd"
                    options={[
                      "00-AS-000",
                      "00-AS-001",
                      "00-AS-002",
                      "00-AS-003",
                    ]}
                    name="transportationNotes"
                    value={formik.values.transportationNotes}
                    onChange={(event, newValue) => {
                      formik.setFieldValue("transportationNotes", newValue);
                    }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <InputDate
                    required
                    label="Gəlmə tarixi"
                    name="arrivalDate"
                    value={formik.values.arrivalDate}
                    onChange={(newValue) =>
                      formik.setFieldValue("arrivalDate", newValue)
                    }
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    type="text"
                    label="Görüşəcək şəxs"
                    name="meetingPerson"
                    value={formik.values.meetingPerson}
                    onChange={formik.handleChange}
                  ></TextField>
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
                    label="Sorğu ilə bağlı qeyd"
                    name="note"
                    value={formik.values.note}
                    onChange={formik.handleChange}
                  ></TextField>
                </Grid>

                <Grid item xs={12}>
                  <Select
                    required
                    label="Nəticə"
                    options={["Departament rəhbərin göndərməsi"]}
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
    </Stack>
  );
};

export default GuestNew;
