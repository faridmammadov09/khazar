import { useEffect, useState } from "react";
import { Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import API from "../../../api";
import InputPassword from "../../Input/InputPassword";
import Select from "../../Select/Select";
import Autocomplete from "../../Input/Autocomplete";
import Button from "../../Button/Button";
import Modal from "../Modal";

const CreateNewUserModal = ({ open, onClose, getUsers }) => {
  const [employeeOptions, setEmployeeOptions] = useState([]);
  const [roleOptions, setRoleOptions] = useState([]);

  const formik = useFormik({
    initialValues: {
      employee: "",
      userName: "",
      roles: [],
      password: "",
      passwordRepeat: "",
    },
    onSubmit: (values) => {
      if (values.password !== values.passwordRepeat) {
        alert("Password not match");
        return;
      }

      const { employee, userName, roles, password } = values;

      API.post("users", {
        fullName: employee,
        photo: null,
        userName,
        email: userName + "@xezertv.az",
        position: null,
        contactNumber: null,
        isActive: true,
        password,
        roles,
      }).then(() => {
        getUsers();
        onClose();
        formik.resetForm();
      });
    },
    // validate: (values) => {
    //   const errors = {};

    //   if (values.password !== values.passwordRepeat) {
    //     errors.password = "Passwords not matching";
    //     errors.passwordRepeat = "Passwords not matching";
    //   }

    //   return errors;
    // },
  });

  const fetchEmployees = async () => {
    const { data } = await API.get("employees");
    const employees = data.map((employee) => employee.fullName);
    setEmployeeOptions(employees);
  };

  const fetchUserRoles = async () => {
    const { data } = await API.get("userRoles");
    const roles = data.map((item) => item.name);
    setRoleOptions(roles);
  };

  useEffect(() => {
    fetchEmployees();
    fetchUserRoles();
  }, []);

  return (
    <Modal
      title="Yeni istifadəçi"
      open={open}
      onClose={onClose}
      onSubmit={formik.handleSubmit}
      actionButtons={
        <>
          <Button onClick={onClose}>Bağla</Button>
          <Button primary type="submit">
            Yarat
          </Button>
        </>
      }
    >
      <Grid container spacing="12px" p={2}>
        <Grid item xs={12} md={6}>
          <Select
            required
            label="Əməkdaş"
            options={employeeOptions}
            name="employee"
            value={formik.values.employee}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            label="Istifadəçi adı"
            name="userName"
            value={formik.values.userName}
            onChange={formik.handleChange}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            label="Rollar"
            options={roleOptions}
            name="roles"
            value={formik.values.roles}
            onChange={(event, newValue) =>
              formik.setFieldValue("roles", newValue)
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputPassword
            required
            fullWidth
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputPassword
            required
            fullWidth
            label="Şifrənin təkrarı"
            name="passwordRepeat"
            value={formik.values.passwordRepeat}
            onChange={formik.handleChange}
          />
        </Grid>
      </Grid>
    </Modal>
  );
};

export default CreateNewUserModal;
