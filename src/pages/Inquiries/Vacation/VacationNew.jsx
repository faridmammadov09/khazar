import { useState } from "react";
import { Grid, Stack } from "@mui/material";
import Button from "../../../components/Button/Button";
import FormWrapper from "../../../components/Form/FormWrapper";
import InputDate from "../../../components/Input/InputDate";
import Select from "../../../components/Select/Select";
import Tabs from "../../../components/Tabs/Tabs";

const TABS = [{ label: "Sorğunun formalaşdırılması", path: "" }];

const VacationNew = () => {
  const [currentTab, setCurrentTab] = useState("");
  const [startDate, setStartDate] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newInquiry = {};

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
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <InputDate
                    required
                    label="Başlama tarixi"
                    value={startDate}
                    onChange={(newValue) => setStartDate(newValue)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputDate
                    required
                    label="Bitmə tarixi"
                    value={expirationDate}
                    onChange={(newValue) => setExpirationDate(newValue)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Select
                    required
                    label="Nəticə"
                    value={result}
                    onChange={(value) => setResult(value)}
                    options={["Departament rəhbərin göndərməsi"]}
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

export default VacationNew;
