import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Paper, Stack, TextField } from "@mui/material";
import API from "../../api";
import Button from "../../components/Button/Button";
import InputDate from "../../components/Input/InputDate";
import List from "../../components/List/List";

const EmployeeSalary = () => {
  const { employeeId } = useParams();
  const [previousWorkExperience, setPreviousWorkExperience] = useState("");
  const [startDate, setStartDate] = useState("");
  const [generalWorkExperience, setGeneralWorkExperience] = useState("");
  const [salaryGross, setSalaryGross] = useState("");
  const [salaryNet, setSalaryNet] = useState("");
  const [salaryData, setSalaryData] = useState([]);

  const getSalary = async () => {
    try {
      const { data } = await API.get(`salaries?employeeId=${employeeId}`);
      let salaryObj = {};

      if (data.length > 0) {
        salaryObj = data[0];

        const {
          previousWorkExperience,
          startDate,
          generalWorkExperience,
          salaryGross,
          salaryNet,
        } = salaryObj;

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
      }
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
      employeeId,
    };

    console.log(newData);
    API.post(`salaries`, newData).then(() => {
      getSalary();
    });
  };

  useEffect(() => {
    getSalary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {salaryData.length > 0 ? (
        <List data={salaryData} />
      ) : (
        <form onSubmit={handleFormSubmit}>
          <Paper variant="outlined">
            <Grid container spacing={2} sx={{ p: 2 }}>
              <Grid item xs={4}>
                <TextField
                  required
                  fullWidth
                  label="Əvvəlki iş stajı"
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
                  required
                  fullWidth
                  label="Ümumi iş stajı"
                  value={generalWorkExperience}
                  onChange={(e) => setGeneralWorkExperience(e.target.value)}
                ></TextField>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  required
                  fullWidth
                  type="number"
                  label="Əmək haqqı gross(AZN)"
                  value={salaryGross}
                  onChange={(e) => setSalaryGross(e.target.value)}
                ></TextField>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  required
                  fullWidth
                  type="number"
                  label="Əmək Haqqı net(AZN)"
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
