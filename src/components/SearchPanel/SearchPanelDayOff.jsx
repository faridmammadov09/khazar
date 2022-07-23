import { Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import SearchPanelContainer from "./SearchPanelContainer";
import Select from "../Select/Select";

const SearchPanelDayOff = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      department: "",
      position: "",
      status: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleClear = () => {
    formik.resetForm();
  };

  return (
    <SearchPanelContainer onSubmit={formik.handleSubmit} onClear={handleClear}>
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Ad Soyad"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
          ></TextField>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Select
            label="Departament"
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

        <Grid item xs={12} sm={4}>
          <Select
            label="Vəzifə"
            name="position"
            value={formik.values.position}
            onChange={formik.handleChange}
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
            name="status"
            value={formik.values.status}
            onChange={formik.handleChange}
            options={["Təstiqləndi", "Ləğv olundu", "Gözləmədədir"]}
          />
        </Grid>
      </Grid>
    </SearchPanelContainer>
  );
};

export default SearchPanelDayOff;
