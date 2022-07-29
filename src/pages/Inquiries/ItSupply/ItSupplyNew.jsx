import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Grid, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import API from "../../../api";
import Button from "../../../components/Button/Button";
import FormWrapper from "../../../components/Form/FormWrapper";
import Select from "../../../components/Select/Select";
import Tabs from "../../../components/Tabs/Tabs";

const TABS = [{ label: "Sorğunun formalaşdırılması", path: "" }];

const ItSupplyNew = () => {
  const [currentTab, setCurrentTab] = useState("");

  const { fullName, photo } = useSelector((state) => state.app.loggedUser);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      descriptionProblem: "",
      result: "",
    },
    onSubmit: (values) => {
      const { descriptionProblem, result } = values;

      API.post("itSupplies", {
        fullName,
        photo,
        descriptionProblem,
        result,
        note: "Note",
        resultText: "Result text",
        date: new Date(),
        status: "Gözləmədədir",
      })
        .then(() => {
          navigate("/inquiries/it-supply");
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
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="text"
                    label="Problemin təsviri"
                    name="descriptionProblem"
                    value={formik.values.descriptionProblem}
                    onChange={formik.handleChange}
                  ></TextField>
                </Grid>

                <Grid item xs={12}>
                  <Select
                    required
                    label="Nəticə"
                    options={["Departament rəhbərin göndərməsi"]}
                    name="result"
                    value={formik.values.result}
                    onChange={formik.handleChange}
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
