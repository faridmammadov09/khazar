import { Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import Select from "../Select/Select";
import SearchPanelContainer from "./SearchPanelContainer";
import RadioGroup from "../RadioGroup/RadioGroup";

const SearchPanelEmployee = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      department: "",
      fromAge: "",
      toAge: "",
      workingTime: "",
      disability: "",
      positionClassification: "",
      staffCapacity: "",
      status: "",
      workPlace: "",
      gender: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleClear = () => {
    formik.handleReset();
  };

  return (
    <SearchPanelContainer onSubmit={formik.handleSubmit} onClear={handleClear}>
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Ad Soyad Ata"
            fullWidth
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
          ></TextField>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Select
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

        <Grid item xs={12} sm={4}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                type="number"
                label="Yaş(dan)"
                fullWidth
                name="fromAge"
                value={formik.values.fromAge}
                onChange={formik.handleChange}
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="number"
                label="Yaş(a)"
                fullWidth
                name="toAge"
                value={formik.values.toAge}
                onChange={formik.handleChange}
              ></TextField>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Select
            label="İş vaxtı"
            name="workingTime"
            value={formik.values.workingTime}
            onChange={formik.handleChange}
            options={["09:00 - 18:00", "18:00 - 00:00", "00:00 - 09:00"]}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Select
            label="Əlilliyi"
            name="disability"
            value={formik.values.disability}
            onChange={formik.handleChange}
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
          <RadioGroup
            title="Vəzifə təsnifatı"
            name="positionClassification"
            value={formik.values.positionClassification}
            onChange={formik.handleChange}
            options={[
              { label: "Qulluqcu", value: "servant" },
              { label: "Fəhlə", value: "worker" },
              { label: "Hamısı", value: "all" },
            ]}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <RadioGroup
            title="Ştat tutumu"
            name="staffCapacity"
            value={formik.values.staffCapacity}
            onChange={formik.handleChange}
            options={[
              { label: "Tam", value: "full" },
              { label: "Yarım", value: "half" },
              { label: "Hamısı", value: "all" },
            ]}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <RadioGroup
            title="Statusu"
            name="status"
            value={formik.values.status}
            onChange={formik.handleChange}
            options={[
              { label: "Aktiv", value: "active" },
              { label: "Arxiv", value: "archive" },
              { label: "Hamısı", value: "all" },
            ]}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <RadioGroup
            title="İş yeri"
            name="workPlace"
            value={formik.values.workPlace}
            onChange={formik.handleChange}
            options={[
              { label: "Əsas", value: "main" },
              { label: "Əlavə", value: "extra" },
              { label: "Hamısı", value: "all" },
            ]}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <RadioGroup
            title="Cinsiyyət"
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
            options={[
              { label: "Qadın", value: "female" },
              { label: "Kişi", value: "male" },
              { label: "Hamısı", value: "all" },
            ]}
          />
        </Grid>
      </Grid>
    </SearchPanelContainer>
  );
};

export default SearchPanelEmployee;
