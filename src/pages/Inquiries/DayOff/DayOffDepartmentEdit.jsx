import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Stack } from "@mui/material";
import { useFormik } from "formik";
import { getDayOffInquiry } from "../../../api";
import FormWrapper from "../../../components/Form/FormWrapper";
import InfoInquiryCreator from "../../../components/InfoInquiryCreator/InfoInquiryCreator";
import InputDate from "../../../components/Input/InputDate";
import Select from "../../../components/Select/Select";
import Button from "../../../components/Button/Button";

const DayOffDepartmentEdit = () => {
  const { id } = useParams();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      dayOffDate: "",
      type: "",
      result: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const fillInputs = ({ fullName, date, type }) => {
    formik.setFieldValue("fullName", fullName);
    formik.setFieldValue("dayOffDate", date);
    formik.setFieldValue("type", type);
  };

  const setDayOffInquiry = async () => {
    const data = await getDayOffInquiry(id);
    fillInputs(data);
  };

  useEffect(() => {
    setDayOffInquiry();
  }, []);

  return (
    <Grid container sx={{ justifyContent: "center" }} spacing={2}>
      <Grid item xs={10}>
        <InfoInquiryCreator name={formik.values.fullName} />
      </Grid>

      <Grid item xs={10}>
        <form onSubmit={formik.handleSubmit}>
          <FormWrapper title="Departament rəhbərin göndərməsi" showInfoButton>
            <Stack spacing={2}>
              <InputDate
                disabled
                label="Day off tarixi"
                name="dayOffDate"
                value={formik.values.dayOffDate}
                onChange={(newValue) => formik.setFieldValue(newValue)}
              />

              <Select
                disabled
                label="Növü"
                options={["Tam gün"]}
                name="type"
                value={formik.values.type}
                onChange={formik.handleChange}
              />

              <Select
                required
                label="Nəticə"
                options={["HR göndərməsi"]}
                name="result"
                value={formik.values.result}
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
            <Button type="submit" primary>
              Yadda saxla və Yönləndir
            </Button>
          </Stack>
        </form>
      </Grid>
    </Grid>
  );
};

export default DayOffDepartmentEdit;
