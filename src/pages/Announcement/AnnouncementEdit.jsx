import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Grid, Stack, TextField } from "@mui/material";
import Button from "../../components/Button/Button";
import FormWrapper from "../../components/Form/FormWrapper";
import Select from "../../components/Select/Select";
import Tabs from "../../components/Tabs/Tabs";
import API from "../../api";
import { useEffect } from "react";

const tabs = [{ label: "Elanın redaktəsi", path: "" }];

const AnnouncementEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentTab, setCurrentTab] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [operation, setOperation] = useState("");

  const fillInputs = ({ name, description, operation }) => {
    setName(name);
    setDescription(description);
    setOperation(operation);
  };

  const getAnnouncement = async () => {
    const { data } = await API.get(`announcements/${id}`);
    fillInputs(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    API.patch(`announcements/${id}`, {
      name,
      description,
      operation,
    });
  };

  const handleTerminate = () => {
    navigate("/announcements");
  };

  useEffect(() => {
    getAnnouncement();
  }, []);

  return (
    <Stack spacing={3}>
      <Tabs
        tabs={tabs}
        currentTab={currentTab}
        onChangeCurrentTab={(event, newValue) => setCurrentTab(newValue)}
      />

      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item xs={12} sm={10}>
          <form onSubmit={handleSubmit}>
            <FormWrapper title="Elanın redaktəsi">
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
              <Button primary onClick={handleTerminate}>
                Sonlandır
              </Button>
            </Stack>
          </form>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default AnnouncementEdit;
