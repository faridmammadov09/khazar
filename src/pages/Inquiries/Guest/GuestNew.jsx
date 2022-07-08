import { useState } from "react";
import { Grid, Stack, TextField } from "@mui/material";
import Button from "../../../components/Button/Button";
import FormWrapper from "../../../components/Form/FormWrapper";
import Select from "../../../components/Select/Select";
import Tabs from "../../../components/Tabs/Tabs";
import InputDate from "../../../components/Input/InputDate";
import Autocomplete from "../../../components/Input/Autocomplete";

const TABS = [{ label: "Sorğunun formalaşdırılması", path: "" }];

const GuestNew = () => {
  const [currentTab, setCurrentTab] = useState("");
  const [comingPeople, setComingPeople] = useState([]);
  const [transportationNotes, setTransportationNotes] = useState([]);
  const [arrivalDate, setArrivalDate] = useState("");
  const [meetingPerson, setMeetingPerson] = useState("");
  const [reasonForComing, setReasonForComing] = useState("");
  const [note, setNote] = useState("");
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
                  <Autocomplete
                    label="Gələcək şəxs"
                    value={comingPeople}
                    options={[
                      "İlqar Abbasov",
                      "Orxan Axnazarov",
                      "Zumrud Huseynova",
                      "Ceyhun Əhmədli",
                    ]}
                    onChange={(event, newValue) => {
                      setComingPeople(newValue);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Autocomplete
                    label="Nəqliyyatı ilə bağlı qeyd"
                    value={transportationNotes}
                    options={[
                      "00-AS-000",
                      "00-AS-001",
                      "00-AS-002",
                      "00-AS-003",
                    ]}
                    onChange={(event, newValue) => {
                      setTransportationNotes(newValue);
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputDate
                    required
                    label="Gəlmə tarixi"
                    value={arrivalDate}
                    onChange={(newValue) => setArrivalDate(newValue)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    type="text"
                    label="Görüşəcək şəxs"
                    fullWidth
                    value={meetingPerson}
                    onChange={(e) => setMeetingPerson(e.target.value)}
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    type="text"
                    label="Gəlmə səbəbi"
                    fullWidth
                    value={reasonForComing}
                    onChange={(e) => setReasonForComing(e.target.value)}
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    type="text"
                    label="Sorğu ilə bağlı qeyd"
                    fullWidth
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
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

export default GuestNew;
