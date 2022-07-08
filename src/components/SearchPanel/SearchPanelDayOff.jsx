import { useState } from "react";
import { Grid, TextField } from "@mui/material";
import SearchPanelContainer from "./SearchPanelContainer";
import Select from "../Select/Select";

const SearchPanelDayOff = () => {
  const [fullName, setFullName] = useState("");
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClear = () => {
    setFullName("");
    setDepartment("");
    setPosition("");
    setStatus("");
  };

  return (
    <SearchPanelContainer onSubmit={handleSubmit} onClear={handleClear}>
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Ad Soyad"
            fullWidth
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          ></TextField>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Select
            label="Departament"
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
          <Select
            label="Vəzifə"
            value={position}
            onChange={setPosition}
            options={[
              "Vəzifə 1",
              "Vəzifə 2",
              "Vəzifə 3",
              "Vəzifə 4",
              "Vəzifə 5",
            ]}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Select
            label="Sorğunun statusu"
            value={status}
            onChange={setStatus}
            options={["Təstiqləndi", "Ləğv olundu", "Gözləmədədir"]}
          />
        </Grid>
      </Grid>
    </SearchPanelContainer>
  );
};

export default SearchPanelDayOff;
