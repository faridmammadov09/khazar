import { useState } from "react";
import { Grid, Stack } from "@mui/material";
import { useFormik } from "formik";
import Button from "../../../components/Button/Button";
import FormWrapper from "../../../components/Form/FormWrapper";
import InputDate from "../../../components/Input/InputDate";
import Select from "../../../components/Select/Select";
import Tabs from "../../../components/Tabs/Tabs";

const TABS = [{ label: "Sorğunun formalaşdırılması", path: "" }];

const DayOffNew = () => {
  const [currentTab, setCurrentTab] = useState("");

  const formik = useFormik({
    initialValues: {
      dayOffDate: null,
      type: "",
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
              <Stack spacing={2}>
                <InputDate
                  label="Day off tarixi"
                  name="dayOffDate"
                  value={formik.values.dayOffDate}
                  onChange={(newValue) =>
                    formik.setFieldValue("dayOffDate", newValue)
                  }
                />

                <Select
                  label="Növü"
                  name="type"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  options={["Tam gün"]}
                />

                <Select
                  label="Nəticə"
                  name="result"
                  value={formik.values.result}
                  onChange={formik.handleChange}
                  options={["Departament rəhbərin göndərməsi"]}
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
                Yadda saxla və Yönləndir
              </Button>
            </Stack>
          </form>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default DayOffNew;
