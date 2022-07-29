import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Grid, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import API, { getAnnouncement } from "../../api";
import Button from "../../components/Button/Button";
import FormWrapper from "../../components/Form/FormWrapper";
import Select from "../../components/Select/Select";
import Tabs from "../../components/Tabs/Tabs";

const TABS = [{ label: "Elanın redaktəsi", path: "" }];

const AnnouncementEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentTab, setCurrentTab] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      operation: "",
    },
    onSubmit: (values) => {
      const { name, description, operation } = values;

      API.patch(`announcements/${id}`, {
        name,
        description,
        operation,
      }).then(() => {
        navigate("/announcements");
      });
    },
  });

  const fillInputs = ({ name, description, operation }) => {
    formik.setFieldValue("name", name);
    formik.setFieldValue("description", description);
    formik.setFieldValue("operation", operation);
  };

  const setAnnouncementData = async () => {
    const data = await getAnnouncement(id);
    fillInputs(data);
  };

  const handleTerminate = () => {
    navigate("/announcements");
  };

  useEffect(() => {
    setAnnouncementData();
  }, []);

  return (
    <Stack spacing={3}>
      <Tabs
        tabs={TABS}
        currentTab={currentTab}
        onChangeCurrentTab={(event, newValue) => setCurrentTab(newValue)}
      />

      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item xs={12} sm={10}>
          <form onSubmit={formik.handleSubmit}>
            <FormWrapper title="Elanın redaktəsi">
              <Stack spacing={2}>
                <TextField
                  required
                  fullWidth
                  label="Adı"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                ></TextField>

                <TextField
                  required
                  fullWidth
                  label="Təsviri"
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                ></TextField>

                <Select
                  required
                  label="Əməliyyatlar"
                  options={[
                    "Paylaş",
                    "Əməliyyat 1",
                    "Əməliyyat 2",
                    "Əməliyyat 3",
                  ]}
                  name="operation"
                  value={formik.values.operation}
                  onChange={formik.handleChange}
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
