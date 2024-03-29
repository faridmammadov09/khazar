import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import SearchPanelContainer from "./SearchPanelContainer";

const SearchPanelUser = ({ onSearchUser }) => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      userName: "",
      position: "",
      roles: "",
    },
    onSubmit: () => {
      onSearchUser();
    },
  });

  const handleClear = () => {
    formik.handleReset();
  };

  return (
    <SearchPanelContainer onSubmit={formik.handleSubmit} onClear={handleClear}>
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            label="Ad Soyad"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            label="İstifadəçi adı"
            name="userName"
            value={formik.values.userName}
            onChange={formik.handleChange}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            label="Vəzifə"
            name="position"
            value={formik.values.position}
            onChange={formik.handleChange}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel id="role-select-label">Rollar</InputLabel>

            <Select
              fullWidth
              label="Rollar"
              labelId="role-select-label"
              name="roles"
              value={formik.values.roles}
              onChange={formik.handleChange}
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
