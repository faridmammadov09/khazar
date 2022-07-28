import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import { getSupplyInquiry } from "../../../api";
import FormWrapper from "../../../components/Form/FormWrapper";
import InfoInquiryCreator from "../../../components/InfoInquiryCreator/InfoInquiryCreator";
import Select from "../../../components/Select/Select";
import Button from "../../../components/Button/Button";

const ItSupplyDepartmentEdit = () => {
  const { id } = useParams();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      note: "",
      resultText: "",
      result: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const fillInputs = ({ fullName, note, resultText }) => {
    formik.setFieldValue("fullName", fullName);
    formik.setFieldValue("note", note);
    formik.setFieldValue("resultText", resultText);
  };

  const setSupplyInquiry = async () => {
    const data = await getSupplyInquiry(id);
    fillInputs(data);
  };

  useEffect(() => {
    setSupplyInquiry();
  }, []);

  return (
    <Grid container sx={{ justifyContent: "center" }} spacing={2}>
      <Grid item xs={10}>
        <InfoInquiryCreator name={formik.values.fullName} />
      </Grid>

      <Grid item xs={10}>
        <form onSubmit={formik.handleSubmit}>
          <FormWrapper title="Departament rəhbərin göndərməsi" showInfoButton>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  disabled
                  fullWidth
                  type="text"
                  label="Qeyd"
                  name="note"
                  value={formik.values.note}
                  onChange={formik.handleChange}
                ></TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  disabled
                  fullWidth
                  type="text"
                  label="Nəticə mətni"
                  name="resultText"
                  value={formik.values.resultText}
                  onChange={formik.handleChange}
                ></TextField>
              </Grid>

              <Grid item xs={12}>
                <Select
                  required
                  label="Nəticə"
                  options={["IT göndərməsi"]}
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
  );
};

export default ItSupplyDepartmentEdit;
