import { useState } from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import SearchPanelContainer from "./SearchPanelContainer";

const SearchPanelUser = ({ onSearchUser }) => {
  const [fullName, setFullname] = useState("");
  const [userName, setUserName] = useState("");
  const [position, setPosition] = useState("");
  const [roles, setRoles] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fullName === "" && userName === "" && position === "" && roles === "") {
    }

    onSearchUser(fullName, userName, position, roles);
  };

  const handleClear = () => {
    setFullname("");
    setUserName("");
    setPosition("");
    setRoles("");
  };

  return (
    <SearchPanelContainer onSubmit={handleSubmit} onClear={handleClear}>
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Ad Soyad"
            fullWidth
            value={fullName}
            onChange={(e) => setFullname(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="İstifadəçi adı"
            fullWidth
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Vəzifə"
            fullWidth
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel id="role-select-label">Rollar</InputLabel>

            <Select
              label="Rollar"
              fullWidth
              labelId="role-select-label"
              id="role-select"
              value={roles}
              onChange={(e) => setRoles(e.target.value)}
            >
              <MenuItem value="Role 1">Role 1</MenuItem>
              <MenuItem value="Role 2">Role 2</MenuItem>
              <MenuItem value="Role 3">Role 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </SearchPanelContainer>
  );
};

export default SearchPanelUser;
