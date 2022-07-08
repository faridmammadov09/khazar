import { useState } from "react";
import { Grid, Stack, TextField } from "@mui/material";
import API from "../../api";
import Button from "../../components/Button/Button";
import FormWrapper from "../../components/Form/FormWrapper";
import Select from "../../components/Select/Select";
import Tabs from "../../components/Tabs/Tabs";

const TABS = [{ label: "Elanın formalaşdırılması", path: "" }];

const AnnouncementNew = () => {
  const [currentTab, setCurrentTab] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [operation, setOperation] = useState("");

  const clearInputs = () => {
    setName("");
    setDescription("");
    setOperation("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAnnouncement = {
      name,
      description,
      createdBy: "Fred Doe",
      createdDate: new Date(),
      operation,
    };

    API.post("announcements", newAnnouncement).then(() => {
      clearInputs();
    });
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
            <FormWrapper title="Elanın formalaşdırılması">
              <Stack spacing={2}>
                <TextField
                  label="Adı"
                  required
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></TextField>

                <TextField
                  label="Təsviri"
                  required
                  fullWidth
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></TextField>

                <Select
                  label="Əməliyyatlar"
                  value={operation}
                  onChange={(value) => setOperation(value)}
                  options={[
                    "Paylaş",
                    "Əməliyyat 1",
                    "Əməliyyat 2",
                    "Əməliyyat 3",
                  ]}
                />
              </Stack>
            </FormWrapper>

            <Stack
              direction="row"
              spacing={2}
              justifyContent="flex-end"
              sx={{ py: 2 }}
            >
              <Button type="submit">Yadda saxla</Button>
              <Button primary>Sonlandır</Button>
            </Stack>
          </form>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default AnnouncementNew;
