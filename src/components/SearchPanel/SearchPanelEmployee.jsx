import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Select from "../Select/Select";
import SearchPanelContainer from "./SearchPanelContainer";

const SearchPanelEmployee = ({ onSearchEmployees }) => {
  const [fullName, setFullName] = useState("");
  const [department, setDepartment] = useState("");
  const [fromAge, setFromAge] = useState("");
  const [toAge, setToAge] = useState("");
  const [workingTime, setWorkingTime] = useState("");
  const [disability, setDisability] = useState("");
  const [positionClassification, setPositionClassification] = useState("all");
  const [staffCapacity, setStaffCapacity] = useState("all");
  const [status, setStatus] = useState("active");
  const [workPlace, setWorkPlace] = useState("all");
  const [gender, setGender] = useState("all");

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputData = {
      fullName,
      department,
      fromAge,
      toAge,
      workingTime,
      disability,
      positionClassification,
      staffCapacity,
      status,
      workPlace,
      gender,
    };

    onSearchEmployees(inputData);
  };

  const handleClear = () => {
    setFullName("");
    setDepartment("");
    setFromAge("");
    setToAge("");
    setWorkingTime("");
    setDisability("");
    setPositionClassification("all");
    setStaffCapacity("all");
    setStatus("active");
    setWorkPlace("all");
    setGender("all");
  };

  return (
    <SearchPanelContainer onSubmit={handleSubmit} onClear={handleClear}>
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Ad Soyad Ata"
            fullWidth
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          ></TextField>
        </Grid>

        <Grid item xs={12} sm={4}>
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

        <Grid item xs={12} sm={4}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                type="number"
                label="Yaş(dan)"
                fullWidth
                value={fromAge}
                onChange={(e) => setFromAge(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="number"
                label="Yaş(a)"
                fullWidth
                value={toAge}
                onChange={(e) => setToAge(e.target.value)}
              ></TextField>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Select
            label="İş vaxtı"
            value={workingTime}
            onChange={setWorkingTime}
            options={["09:00 - 18:00", "18:00 - 00:00", "00:00 - 09:00"]}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Select
            label="Əlilliyi"
            value={disability}
            onChange={setDisability}
            options={[
              "Yoxdur",
              "1 ci dərəcəli",
              "2 ci dərəcəli",
              "3 cü dərəcəli",
              "4 cü dərəcəli",
            ]}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <FormControl>
            <FormLabel
              id="position-classification-radio-buttons-group-label"
              color="secondary"
            >
              Vəzifə təsnifatı
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="position-classification-radio-buttons-group-label"
              name="position-classification-radio-buttons-group"
              value={positionClassification}
              onChange={(e) => setPositionClassification(e.target.value)}
            >
              <FormControlLabel
                value="servant"
                control={<Radio color="secondary" />}
                label="Qulluqcu"
              />
              <FormControlLabel
                value="worker"
                control={<Radio color="secondary" />}
                label="Fəhlə"
              />
              <FormControlLabel
                value="all"
                control={<Radio color="secondary" />}
                label="Hamısı"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={4}>
          <FormControl>
            <FormLabel
              id="staff-capacity-radio-buttons-group-label"
              color="secondary"
            >
              Ştat tutumu
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="staff-capacity-radio-buttons-group-label"
              name="staff-capacity-radio-buttons-group"
              value={staffCapacity}
              onChange={(e) => setStaffCapacity(e.target.value)}
            >
              <FormControlLabel
                value="servant"
                control={<Radio color="secondary" />}
                label="Tam"
              />
              <FormControlLabel
                value="worker"
                control={<Radio color="secondary" />}
                label="Yarım"
              />
              <FormControlLabel
                value="all"
                control={<Radio color="secondary" />}
                label="Hamısı"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={4}>
          <FormControl>
            <FormLabel
              id="position-classification-radio-buttons-group-label"
              color="secondary"
            >
              Statusu
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="position-classification-radio-buttons-group-label"
              name="position-classification-radio-buttons-group"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <FormControlLabel
                value="active"
                control={<Radio color="secondary" />}
                label="Aktiv"
              />
              <FormControlLabel
                value="archive"
                control={<Radio color="secondary" />}
                label="Arxiv"
              />
              <FormControlLabel
                value="all"
                control={<Radio color="secondary" />}
                label="Hamısı"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={4}>
          <FormControl>
            <FormLabel
              id="position-classification-radio-buttons-group-label"
              color="secondary"
            >
              İş yeri
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="position-classification-radio-buttons-group-label"
              name="position-classification-radio-buttons-group"
              value={workPlace}
              onChange={(e) => setWorkPlace(e.target.value)}
            >
              <FormControlLabel
                value="main"
                control={<Radio color="secondary" />}
                label="Əsas"
              />
              <FormControlLabel
                value="extra"
                control={<Radio color="secondary" />}
                label="Əlavə"
              />
              <FormControlLabel
                value="all"
                control={<Radio color="secondary" />}
                label="Hamısı"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={4}>
          <FormControl>
            <FormLabel
              id="position-classification-radio-buttons-group-label"
              color="secondary"
            >
              Cinsiyyət
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="position-classification-radio-buttons-group-label"
              name="position-classification-radio-buttons-group"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel
                value="Kişi"
                control={<Radio color="secondary" />}
                label="Kişi"
              />
              <FormControlLabel
                value="Qadın"
                control={<Radio color="secondary" />}
                label="Qadın"
              />
              <FormControlLabel
                value="all"
                control={<Radio color="secondary" />}
                label="Hamısı"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </SearchPanelContainer>
  );
};

export default SearchPanelEmployee;
