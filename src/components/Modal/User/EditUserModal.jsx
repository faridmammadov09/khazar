import { useEffect, useState } from "react";
import { Grid, TextField } from "@mui/material";
import API from "../../../api";
import TheSelect from "../../Select/Select";
import Button from "../../Button/Button";
import Autocomplete from "../../Input/Autocomplete";
import Modal from "../Modal";

const EditUserModal = ({ open, onClose, getUsers, user }) => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [roles, setRoles] = useState([]);
  const [roleOptions, setRoleOptions] = useState([]);

  const fillInputs = ({ fullName, userName, roles }) => {
    setFullName(fullName);
    setUserName(userName);
    setRoles(roles);
  };

  const fetchUserRoles = async () => {
    const { data } = await API.get("userRoles");
    const roles = data.map((item) => item.name);
    setRoleOptions(roles);
  };

  const handleEditUser = (e) => {
    e.preventDefault();

    API.patch(`users/${user.id}`, {
      userName,
      roles,
    }).then(() => {
      onClose();
      getUsers();
    });
  };

  useEffect(() => {
    fetchUserRoles();
  }, []);

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      fillInputs(user);
    }
  }, [user]);

  return (
    <Modal
      title="İstifadəçinin redaktəsi"
      open={open}
      onClose={onClose}
      onSubmit={handleEditUser}
      actionButtons={
        <>
          <Button onClick={onClose}>Bağla</Button>
          <Button primary type="submit">
            Yadda saxla
          </Button>
        </>
      }
    >
      <Grid container spacing="12px" p={2}>
        <Grid item xs={6}>
          <TheSelect
            label="Əməkdaş"
            value={fullName}
            options={[fullName]}
            required
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Istifadəçi adı"
            fullWidth
            required
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
      </Grid>
    </Modal>
  );
};

export default EditUserModal;
