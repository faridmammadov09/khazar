import { useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Paper, Stack, TextField } from "@mui/material";
import Button from "../../components/Button/Button";
import InputDate from "../../components/Input/InputDate";
import List from "../../components/List/List";
import API from "../../api";
import { useEffect } from "react";

const EmployeeSalary = () => {
  const { employeeId } = useParams();
  const [previousWorkExperience, setPreviousWorkExperience] = useState("");
  const [startDate, setStartDate] = useState("");
  const [generalWorkExperience, setGeneralWorkExperience] = useState("");
  const [salaryGross, setSalaryGross] = useState("");
  const [salaryNet, setSalaryNet] = useState("");
  const [salaryData, setSalaryData] = useState(null);

  // const data = [
  //   { title: '"Xəzər TV" MMC-yə qədərki iş stajı', value: "12il 9ay 23gün" },
  //   { title: '"Xəzər TV" MMC-də olan iş stajı', value: "11ay 8gün" },
  //   { title: "Ümumi iş stajı", value: "13il 9ay 2gün" },
  //   { title: "Əmək haqqı gross(AZN)", value: "1000" },
  //   { title: "Əmək Haqqı net(AZN)", value: "950" },
  // ];

  //     {
  //   "id": 1,
  //   "previousWorkExperience": "12il 9ay 23gün",
  //   "startDate": "11ay 8gün",
  //   "generalWorkExperience": "13il 9ay 2gün",
  //   "salaryGross": 1000,
  //   "salaryNet": 950
  // }

  const getSalary = async () => {
    try {
      const { data } = await API.get(`salaries/${employeeId}`);

      const {
        previousWorkExperience,
        startDate,
        generalWorkExperience,
        salaryGross,
        salaryNet,
      } = data;

      setSalaryData([
        {
          title: '"Xəzər TV" MMC-yə qədərki iş stajı',
          value: previousWorkExperience,
        },
        { title: '"Xəzər TV" MMC-də olan iş stajı', value: startDate },
        { title: "Ümumi iş stajı", value: generalWorkExperience },
        { title: "Əmək haqqı gross(AZN)", value: salaryGross },
        { title: "Əmək Haqqı net(AZN)", value: salaryNet },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newData = {
      previousWorkExperience,
      startDate,
      generalWorkExperience,
      salaryGross: +salaryGross,
      salaryNet: +salaryNet,
    };

    console.log(newData);
    API.post(`salaries`, newData).then(() => {
      getSalary();
    });
  };

  useEffect(() => {
    getSalary();
  }, []);

  return (
    <>
      {salaryData ? (
        <List data={salaryData} />
      ) : (
        <form onSubmit={handleFormSubmit}>
          <Paper variant="outlined">
            <Grid container spacing={2} sx={{ p: 2 }}>
              <Grid item xs={4}>
                <TextField
                  label="Əvvəlki iş stajı"
                  fullWidth
                  required
                  value={previousWorkExperience}
                  onChange={(e) => setPreviousWorkExperience(e.target.value)}
                ></TextField>
              </Grid>
              <Grid item xs={4}>
                <InputDate
                  required
                  label="Başlama tarixi"
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Ümumi iş stajı"
                  fullWidth
                  required
                  value={generalWorkExperience}
                  onChange={(e) => setGeneralWorkExperience(e.target.value)}
                ></TextField>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  type="number"
                  label="Əmək haqqı gross(AZN)"
                  fullWidth
                  required
                  value={salaryGross}
                  onChange={(e) => setSalaryGross(e.target.value)}
                ></TextField>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  type="number"
                  label="Əmək Haqqı net(AZN)"
                  fullWidth
                  required
                  value={salaryNet}
                  onChange={(e) => setSalaryNet(e.target.value)}
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
      )}
    </>
  );
};

export default EmployeeSalary;
