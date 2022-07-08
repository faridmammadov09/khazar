import { useEffect, useState } from "react";
import { Grid, TextField } from "@mui/material";
import API from "../../../api";
import InputPassword from "../../Input/InputPassword";
import Select from "../../Select/Select";
import Autocomplete from "../../Input/Autocomplete";
import Button from "../../Button/Button";
import Modal from "../Modal";

const CreateNewUserModal = ({ open, onClose, getUsers }) => {
  const [employee, setEmployee] = useState("");
  const [employeeOptions, setEmployeeOptions] = useState([]);
  const [userName, setUserName] = useState("");
  const [roles, setRoles] = useState([]);
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [error, setError] = useState({
    password: false,
    passwordRepeat: false,
  });
  const [roleOptions, setRoleOptions] = useState([]);

  const clearInputs = () => {
    setEmployee("");
    setUserName("");
    setRoles([]);
    setPassword("");
    setPasswordRepeat("");
  };

  const handleCreateNewUser = (e) => {
    e.preventDefault();

    if (password !== passwordRepeat) {
      alert("Password not match");
      return;
    }

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
      clearInputs();
    });
  };

  const fetchUserRoles = async () => {
    const { data } = await API.get("userRoles");
    const roles = data.map((item) => item.name);
    setRoleOptions(roles);
  };

  const fetchEmployees = async () => {
    const { data } = await API.get("employees");
    const employees = data.map((employee) => employee.fullName);
    setEmployeeOptions(employees);
  };

  useEffect(() => {
    fetchUserRoles();
    fetchEmployees();
  }, []);

  return (
    <Modal
      title="Yeni istifadəçi"
      open={open}
      onClose={onClose}
      onSubmit={handleCreateNewUser}
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
            label="Əməkdaş"
            value={employee}
            onChange={(value) => setEmployee(value)}
            options={employeeOptions}
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Istifadəçi adı"
            required
            fullWidth
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            label="Rollar"
            value={roles}
            options={roleOptions}
            onChange={(event, newValue) => {
              setRoles(newValue);
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputPassword
            password={password}
            onChangePassword={(e) => setPassword(e.target.value)}
            error={error.password}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputPassword
            label="Şifrənin təkrarı"
            password={passwordRepeat}
            onChangePassword={(e) => setPasswordRepeat(e.target.value)}
            error={error.passwordRepeat}
            fullWidth
            required
          />
        </Grid>
      </Grid>
    </Modal>
  );
};

export default CreateNewUserModal;
