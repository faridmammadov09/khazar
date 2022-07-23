import { useState } from "react";
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
        createdBy: "Fred Doe",
        createdDate: new Date(),
        operation,
      };

      API.post("announcements", newAnnouncement).then(() => {
        formik.resetForm();
      });
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
            <FormWrapper title="Elanın formalaşdırılması">
              <Stack spacing={2}>
                <TextField
                  label="Adı"
                  required
                  fullWidth
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                ></TextField>

                <TextField
                  label="Təsviri"
                  required
                  fullWidth
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                ></TextField>

                <Select
                  label="Əməliyyatlar"
                  name="operation"
                  value={formik.values.operation}
                  onChange={formik.handleChange}
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
