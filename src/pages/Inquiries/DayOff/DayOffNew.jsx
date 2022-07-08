import { useState } from "react";
import { Grid, Stack } from "@mui/material";
import Button from "../../../components/Button/Button";
import FormWrapper from "../../../components/Form/FormWrapper";
import InputDate from "../../../components/Input/InputDate";
import Select from "../../../components/Select/Select";
import Tabs from "../../../components/Tabs/Tabs";

const TABS = [{ label: "Sorğunun formalaşdırılması", path: "" }];

const DayOffNew = () => {
  const [currentTab, setCurrentTab] = useState("");
  const [dayOffDate, setDayOffDate] = useState("");
  const [type, setType] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newInquiry = {
      dayOffDate,
      type,
      result,
    };

    console.log(newInquiry);
  };

  return (
    <Stack spacing={3}>
      <Tabs
        tabs={TABS}
        currentTab={currentTab}
        onChangeCurrentTab={(event, newValue) => setCurrentTab(newValue)}
      />

      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item xs={10}>
          <form onSubmit={handleSubmit}>
            <FormWrapper title="Sorğunun formalaşdırılması">
              <Stack spacing={2}>
                <InputDate
                  required
                  label="Day off tarixi"
                  value={dayOffDate}
                  onChange={(newValue) => setDayOffDate(newValue)}
                />

                <Select
                  label="Növü"
                  value={type}
                  onChange={(value) => setType(value)}
                  options={["Tam gün"]}
                />

                <Select
                  label="Nəticə"
                  value={result}
                  onChange={(value) => setResult(value)}
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
