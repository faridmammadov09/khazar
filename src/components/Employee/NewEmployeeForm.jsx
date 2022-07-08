import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Paper, Stack, TextField } from "@mui/material";
import { format } from "date-fns";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";
import InputDate from "../Input/InputDate";
import RadioGroup from "../RadioGroup/RadioGroup";
import API from "../../api";

const NewEmployeeForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [pin, setPin] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [company, setCompany] = useState("");
  const [department, setDepartment] = useState("");
  const [positionClassification, setPositionClassification] = useState("");
  const [position, setPosition] = useState("");
  const [citizenship, setCitizenship] = useState("");
  const [nationality, setNationality] = useState("");
  const [education, setEducation] = useState("");
  const [email, setEmail] = useState("");
  const [staffCapacity, setStaffCapacity] = useState("");
  const [workPlace, setWorkPlace] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [corporateNumber, setCorporateNumber] = useState("");
  const [internalNumber, setInternalNumber] = useState("");
  const [homePhoneNumber, setHomePhoneNumber] = useState("");
  const [closeRelative, setCloseRelative] = useState("");
  const [closeRelativePhoneNumber, setCloseRelativePhoneNumber] = useState("");
  const [workingTime, setWorkingTime] = useState("");
  const [weeklyWorkingHours, setWeeklyWorkingHours] = useState("");
  const [disability, setDisability] = useState("");
  const [socialInsuranceNumber, setSocialInsuranceNumber] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const currentYear = new Date().getFullYear();
    const age = currentYear - dateOfBirth.getFullYear();

    const newEmployee = {
      photo: "https://i.pravatar.cc/150?img=11",
      fullName: `${name} ${surname} ${fatherName}`,
      maritalStatus,
      gender,
      pin,
      serialNumber,
      dateOfBirth,
      age,
      citizenship,
      nationality,
      education,
      email,
      mobileNumber,
      corporateNumber,
      internalNumber,
      homePhoneNumber,
      closeRelative,
      closeRelativePhoneNumber,
      company,
      department,
      positionClassification,
      position,
      workingTime,
      weeklyWorkingHours,
      staffCapacity,
      workPlace,
    };

    console.log(newEmployee);
    API.post("/employees", newEmployee).then(() => {
      navigate("/employees");
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Paper variant="outlined">
        <Grid container spacing={2} sx={{ p: 2 }}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Ad"
              fullWidth
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Soyad"
              fullWidth
              required
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Ata"
              fullWidth
              required
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <RadioGroup
              id="gender"
              title="Cinsi"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              options={[
                { label: "Qadın", value: "Qadın" },
                { label: "Kişi", value: "Kişi" },
              ]}
              required
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <InputDate
              label="Doğum tarixi"
              value={dateOfBirth}
              onChange={(newValue) => setDateOfBirth(newValue)}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Yaş"
              fullWidth
              value={age}
              onChange={(e) => setAge(e.target.value)}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <RadioGroup
              id="marital-status"
              title="Ailə vəziyyəti"
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
              options={[
                { label: "Evli", value: "Evli" },
                { label: "Subay", value: "Subay" },
              ]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="FIN"
              fullWidth
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Şəxsiyyət vəsiqənin seriya nömrəsi"
              fullWidth
              value={serialNumber}
              onChange={(e) => setSerialNumber(e.target.value)}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Şirkət"
              fullWidth
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Select
              label="Şöbə"
              value={department}
              onChange={setDepartment}
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
              id="position-classification"
              title="Vəzifə təsnifatı"
              value={positionClassification}
              onChange={(e) => setPositionClassification(e.target.value)}
              options={[
                { label: "Fəhlə", value: "Fəhlə" },
                { label: "Qulluqçu", value: "Qulluqçu" },
              ]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Select
              label="Vəzifə"
              value={position}
              onChange={setPosition}
              options={["Aparıcı", "Vəzifə 1", "Vəzifə 2", "Vəzifə 3"]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Vətəndaşlıq"
              fullWidth
              value={citizenship}
              onChange={(e) => setCitizenship(e.target.value)}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Milliyyəti"
              fullWidth
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Select
              label="Təhsil"
              value={education}
              onChange={setEducation}
              options={["Orta", "Ali"]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="E-ünvan"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <RadioGroup
              id="staff-capacity"
              title="Ştat tutumu"
              value={staffCapacity}
              onChange={(e) => setStaffCapacity(e.target.value)}
              options={[
                { label: "Tam", value: "Tam" },
                { label: "Natamam", value: "Natamam" },
              ]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <RadioGroup
              id="workplace"
              title="Iş yeri"
              value={workPlace}
              onChange={(e) => setWorkPlace(e.target.value)}
              options={[
                { label: "Əsas", value: "Əsas" },
                { label: "Əlavə", value: "Əlavə" },
              ]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Mobil nömrə"
              fullWidth
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              helperText="+994 00 000 00 00"
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Korporativ nömrə"
              fullWidth
              value={corporateNumber}
              onChange={(e) => setCorporateNumber(e.target.value)}
              helperText="+994 00 000 00 00"
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Daxili nömrə"
              fullWidth
              value={internalNumber}
              onChange={(e) => setInternalNumber(e.target.value)}
              helperText="00 00"
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Ev telefonu"
              fullWidth
              value={homePhoneNumber}
              onChange={(e) => setHomePhoneNumber(e.target.value)}
              helperText="012 000 00 00"
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Select
              label="Yaxın qohumun kimliyi"
              value={closeRelative}
              onChange={setCloseRelative}
              options={["Ata", "Ana", "Qardaş", "Bacı", "Həyat yoldaşı"]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Yaxın qohum(mob)"
              fullWidth
              value={closeRelativePhoneNumber}
              onChange={(e) => setCloseRelativePhoneNumber(e.target.value)}
              helperText="+994 00 000 00 00"
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Select
              label="İş vaxtı"
              value={workingTime}
              onChange={setWorkingTime}
              options={["09:00 - 18:00", "18:00 - 00:00", "00:00 - 09:00"]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Həftəlik iş saatı"
              fullWidth
              value={weeklyWorkingHours}
              onChange={(e) => setWeeklyWorkingHours(e.target.value)}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Select
              label="Əlillik"
              value={disability}
              onChange={setDisability}
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
              label="Sosial sığorta nömrəsi"
              fullWidth
              value={socialInsuranceNumber}
              onChange={(e) => setSocialInsuranceNumber(e.target.value)}
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
