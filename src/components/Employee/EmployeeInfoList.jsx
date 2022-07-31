import { Grid, Paper } from "@mui/material";
import EmployeeInfoItem from "./EmployeeInfoItem";

const TITLES = {
  photo: "Foto şəkil",
  fullName: "Ad Soyad Ata",
  maritalStatus: "Ailə vəziyyəti",
  gender: "Cinsi",
  pin: "FİN",
  serialNumber: "Şəxsiyyət vəsiqənin seriya nömrəsi",
  dateOfBirth: "Doğum tarixi",
  citizenship: "Vətəndaşlıq",
  nationality: "Milliyyəti",
  education: "Təhsil",
  email: "E-ünvan",
  mobileNumber: "Mobil nömrə",
  corporateNumber: "Korporativ nömrə",
  internalNumber: "Daxili nömrə",
  homePhoneNumber: "Ev telefonu",
  closeRelative: "Yaxın qohumun kimliyi",
  closeRelativePhoneNumber: "Yaxın qohum(mob)",
  company: "Şirkət",
  department: "Şöbə",
  positionClassification: "Vəzifə təsnifatı",
  position: "Vəzifə",
  workingTime: "İş vaxtı",
  weeklyWorkingHours: "Həftəlik iş saatı",
  staffCapacity: "Ştat tutumu",
  workPlace: "İş yeri",
  disability: "Əlillik",
  socialInsuranceNumber: "Sosial sığorta nömrəsi",
};

const EmployeeInfoList = ({ employee }) => {
  return (
    <Paper variant="outlined">
      <Grid container sx={{ px: 2 }}>
        {Object.keys(employee).map((key, index) => {
          const filteredKeys = ["id", "isArchived", "age"];

          if (filteredKeys.includes(key)) return null;

          return (
            <EmployeeInfoItem
              key={index}
              title={TITLES[key]}
              data={employee[key] ? employee[key] : "—"}
            />
          );
        })}
      </Grid>
    </Paper>
  );
};

export default EmployeeInfoList;
