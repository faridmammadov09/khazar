import { useNavigate } from "react-router-dom";
import { Grid, Paper, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import API from "../../api";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";
import InputDate from "../Input/InputDate";
import RadioGroup from "../RadioGroup/RadioGroup";

const NewEmployeeForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      fatherName: "",
      gender: "",
      dateOfBirth: "",
      age: "",
      maritalStatus: "",
      pin: "",
      serialNumber: "",
      company: "",
      department: "",
      positionClassification: "",
      position: "",
      citizenship: "",
      nationality: "",
      education: "",
      email: "",
      staffCapacity: "",
      workPlace: "",
      mobileNumber: "",
      corporateNumber: "",
      internalNumber: "",
      homePhoneNumber: "",
      closeRelative: "",
      closeRelativePhoneNumber: "",
      workingTime: "",
      weeklyWorkingHours: "",
      disability: "",
      socialInsuranceNumber: "",
    },
    onSubmit: (values) => {
      console.log(values);

      const {
        name,
        surname,
        fatherName,
        gender,
        dateOfBirth,
        maritalStatus,
        pin,
        serialNumber,
        company,
        department,
        positionClassification,
        position,
        citizenship,
        nationality,
        education,
        email,
        staffCapacity,
        workPlace,
        mobileNumber,
        corporateNumber,
        internalNumber,
        homePhoneNumber,
        closeRelative,
        closeRelativePhoneNumber,
        workingTime,
        weeklyWorkingHours,
        disability,
        socialInsuranceNumber,
      } = values;

      const currentYear = new Date().getFullYear();
      const age = currentYear - dateOfBirth.getFullYear();

      const newEmployee = {
        photo: "https://i.pravatar.cc/150?img=11",
        fullName: `${name} ${surname} ${fatherName}`,
        gender,
        dateOfBirth,
        age,
        maritalStatus,
        pin,
        serialNumber,
        company,
        department,
        positionClassification,
        position,
        citizenship,
        nationality,
        education,
        email,
        staffCapacity,
        workPlace,
        mobileNumber,
        corporateNumber,
        internalNumber,
        homePhoneNumber,
        closeRelative,
        closeRelativePhoneNumber,
        workingTime,
        weeklyWorkingHours,
        disability,
        socialInsuranceNumber,
      };

      API.post("/employees", newEmployee).then(() => {
        navigate("/employees");
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Paper variant="outlined">
        <Grid container spacing={2} sx={{ p: 2 }}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              required
              label="Ad"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              required
              label="Soyad"
              name="surname"
              value={formik.values.surname}
              onChange={formik.handleChange}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              required
              label="Ata"
              name="fatherName"
              value={formik.values.fatherName}
              onChange={formik.handleChange}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <RadioGroup
              required
              title="Cinsi"
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              options={[
                { label: "Qadın", value: "Qadın" },
                { label: "Kişi", value: "Kişi" },
              ]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <InputDate
              required
              label="Doğum tarixi"
              name="dateOfBirth"
              value={formik.values.dateOfBirth}
              onChange={(newValue) =>
                formik.setFieldValue("dateOfBirth", newValue)
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              required
              fullWidth
              label="Yaş"
              name="age"
              value={formik.values.age}
              onChange={formik.handleChange}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <RadioGroup
              required
              title="Ailə vəziyyəti"
              name="maritalStatus"
              value={formik.values.maritalStatus}
              onChange={formik.handleChange}
              options={[
                { label: "Evli", value: "Evli" },
                { label: "Subay", value: "Subay" },
              ]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              required
              fullWidth
              label="FIN"
              name="pin"
              value={formik.values.pin}
              onChange={formik.handleChange}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              required
              fullWidth
              label="Şəxsiyyət vəsiqənin seriya nömrəsi"
              name="serialNumber"
              value={formik.values.serialNumber}
              onChange={formik.handleChange}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              required
              fullWidth
              label="Şirkət"
              name="company"
              value={formik.values.company}
              onChange={formik.handleChange}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Select
              required
              label="Şöbə"
              name="department"
              value={formik.values.department}
              onChange={formik.handleChange}
              options={[
                "Rəqəmsal idarəetmə",
                "HR",
                "Təhlükəsizlik",
                "İT",
                "Satınalma",
              ]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <RadioGroup
              required
              title="Vəzifə təsnifatı"
              name="positionClassification"
              value={formik.values.positionClassification}
              onChange={formik.handleChange}
              options={[
                { label: "Fəhlə", value: "Fəhlə" },
                { label: "Qulluqçu", value: "Qulluqçu" },
              ]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Select
              required
              label="Vəzifə"
              name="position"
              value={formik.values.position}
              onChange={formik.handleChange}
              options={["Aparıcı", "Vəzifə 1", "Vəzifə 2", "Vəzifə 3"]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              required
              fullWidth
              label="Vətəndaşlıq"
              name="citizenship"
              value={formik.values.citizenship}
              onChange={formik.handleChange}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              required
              fullWidth
              label="Milliyyəti"
              name="nationality"
              value={formik.values.nationality}
              onChange={formik.handleChange}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Select
              required
              label="Təhsil"
              name="education"
              value={formik.values.education}
              onChange={formik.handleChange}
              options={["Orta", "Ali"]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              required
              fullWidth
              type="email"
              label="E-ünvan"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <RadioGroup
              required
              title="Ştat tutumu"
              name="staffCapacity"
              value={formik.values.staffCapacity}
              onChange={formik.handleChange}
              options={[
                { label: "Tam", value: "Tam" },
                { label: "Natamam", value: "Natamam" },
              ]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <RadioGroup
              required
              title="Iş yeri"
              name="workPlace"
              value={formik.values.workPlace}
              onChange={formik.handleChange}
              options={[
                { label: "Əsas", value: "Əsas" },
                { label: "Əlavə", value: "Əlavə" },
              ]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              required
              fullWidth
              label="Mobil nömrə"
              name="mobileNumber"
              value={formik.values.mobileNumber}
              onChange={formik.handleChange}
              helperText="+994 00 000 00 00"
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              required
              fullWidth
              label="Korporativ nömrə"
              name="corporateNumber"
              value={formik.values.corporateNumber}
              onChange={formik.handleChange}
              helperText="+994 00 000 00 00"
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              required
              fullWidth
              label="Daxili nömrə"
              name="internalNumber"
              value={formik.values.internalNumber}
              onChange={formik.handleChange}
              helperText="00 00"
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              required
              fullWidth
              label="Ev telefonu"
              name="homePhoneNumber"
              value={formik.values.homePhoneNumber}
              onChange={formik.handleChange}
              helperText="012 000 00 00"
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Select
              required
              label="Yaxın qohumun kimliyi"
              name="closeRelative"
              value={formik.values.closeRelative}
              onChange={formik.handleChange}
              options={["Ata", "Ana", "Qardaş", "Bacı", "Həyat yoldaşı"]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              required
              fullWidth
              label="Yaxın qohum(mob)"
              name="closeRelativePhoneNumber"
              value={formik.values.closeRelativePhoneNumber}
              onChange={formik.handleChange}
              helperText="+994 00 000 00 00"
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Select
              required
              label="İş vaxtı"
              name="workingTime"
              value={formik.values.workingTime}
              onChange={formik.handleChange}
              options={["09:00 - 18:00", "18:00 - 00:00", "00:00 - 09:00"]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              required
              fullWidth
              label="Həftəlik iş saatı"
              name="weeklyWorkingHours"
              value={formik.values.weeklyWorkingHours}
              onChange={formik.handleChange}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Select
              required
              label="Əlillik"
              name="disability"
              value={formik.values.disability}
              onChange={formik.handleChange}
              options={[
                "Yoxdur",
                "1-ci dərəcəli",
                "2-ci dərəcəli",
                "3-cü dərəcəli",
                "4-cü dərəcəli",
              ]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              required
              fullWidth
              label="Sosial sığorta nömrəsi"
              name="socialInsuranceNumber"
              value={formik.values.socialInsuranceNumber}
              onChange={formik.handleChange}
            ></TextField>
          </Grid>
        </Grid>
      </Paper>
      <Stack
        direction="row"
        spacing="12px"
        justifyContent="flex-end"
        sx={{ py: 2 }}
      >
        <Button primary type="submit">
          Yadda saxla
        </Button>
      </Stack>
    </form>
  );
};

export default NewEmployeeForm;
