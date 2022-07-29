import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Grid, Stack } from "@mui/material";
import { useFormik } from "formik";
import API from "../../../api";
import Button from "../../../components/Button/Button";
import FormWrapper from "../../../components/Form/FormWrapper";
import InputDate from "../../../components/Input/InputDate";
import Select from "../../../components/Select/Select";
import Tabs from "../../../components/Tabs/Tabs";

const TABS = [{ label: "Sorğunun formalaşdırılması", path: "" }];

const VacationNew = () => {
  const [currentTab, setCurrentTab] = useState("");

  const { fullName, photo } = useSelector((state) => state.app.loggedUser);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      startDate: "",
      expirationDate: "",
      result: "",
    },
    onSubmit: (values) => {
      const { startDate, expirationDate, result } = values;

      API.post("vacationInfo", {
        fullName,
        photo,
        substitutePerson: "",
        startDate,
        expirationDate,
        result,
        date: new Date(),
        status: "Gözləmədədir",
      })
        .then(() => {
          navigate("/inquiries/vacation");
        })
        .catch((error) => {
          console.log(error);
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
            <FormWrapper title="Sorğunun formalaşdırılması">
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <InputDate
                    required
                    label="Başlama tarixi"
                    name="startDate"
                    value={formik.values.startDate}
                    onChange={(newValue) => {
                      formik.setFieldValue("startDate", newValue);
                    }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <InputDate
                    required
                    label="Bitmə tarixi"
                    name="expirationDate"
                    value={formik.values.expirationDate}
                    onChange={(newValue) => {
                      formik.setFieldValue("expirationDate", newValue);
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Select
                    required
                    label="Nəticə"
                    name="result"
                    value={formik.values.result}
                    onChange={formik.handleChange}
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
