import { useState } from "react";
import { Grid, Stack, TextField } from "@mui/material";
import Button from "../../../components/Button/Button";
import FormWrapper from "../../../components/Form/FormWrapper";
import Select from "../../../components/Select/Select";
import Tabs from "../../../components/Tabs/Tabs";

const TABS = [{ label: "Sorğunun formalaşdırılması", path: "" }];

const ItSupplyNew = () => {
  const [currentTab, setCurrentTab] = useState("");
  const [descriptionProblem, setDescriptionProblem] = useState("");
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
                <Grid item xs={12}>
                  <TextField
                    required
                    type="text"
                    label="Problemin təsviri"
                    fullWidth
                    value={descriptionProblem}
                    onChange={(e) => setDescriptionProblem(e.target.value)}
                  ></TextField>
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

export default ItSupplyNew;
