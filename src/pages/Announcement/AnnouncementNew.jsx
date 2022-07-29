import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Grid, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import API from "../../api";
import Button from "../../components/Button/Button";
import FormWrapper from "../../components/Form/FormWrapper";
import Select from "../../components/Select/Select";
import Tabs from "../../components/Tabs/Tabs";

const TABS = [{ label: "Elanın formalaşdırılması", path: "" }];

const AnnouncementNew = () => {
  const [currentTab, setCurrentTab] = useState("");

  const navigate = useNavigate();

  const { fullName } = useSelector((state) => state.app.loggedUser);

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      operation: "",
    },
    onSubmit: (values) => {
      const { name, description, operation } = values;

      const newAnnouncement = {
        name,
        description,
        operation,
        createdBy: fullName,
        createdDate: new Date(),
      };

      API.post("announcements", newAnnouncement).then(() => {
        formik.resetForm();
        navigate("/announcements");
      });
    },
  });

  const handleTerminate = () => {
    navigate("/announcements");
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
          <form onSubmit={formik.handleSubmit}>
            <FormWrapper title="Elanın formalaşdırılması">
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

export default AnnouncementNew;
