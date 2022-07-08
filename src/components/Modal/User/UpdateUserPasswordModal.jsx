import { useState } from "react";
import { Grid } from "@mui/material";
import API from "../../../api";
import InputPassword from "../../Input/InputPassword";
import Button from "../../Button/Button";
import Modal from "../Modal";

const UpdatePasswordModal = ({ open, onClose, user }) => {
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const clearInputs = () => {
    setPassword("");
    setPasswordRepeat("");
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();

    if (password !== passwordRepeat) {
      alert("Password didn't match");
      return;
    }

    API.patch(`users/${user.id}`, {
      password,
    }).then(() => {
      onClose();
      clearInputs();
    });
  };

  return (
    <Modal
      title="Şifrənin yenilənməsi"
      open={open}
      onClose={onClose}
      onSubmit={handleUpdatePassword}
      actionButtons={
        <>
          <Button onClick={onClose}>Bağla</Button>
          <Button primary type="submit">
            Yenilə
          </Button>
        </>
      }
    >
      <Grid container spacing="12px" p={2}>
        <Grid item xs={12}>
          <InputPassword
            label="Yeni şifrə"
            fullWidth
            required
            password={password}
            onChangePassword={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <InputPassword
            label="Şifrənin təkrarı"
            fullWidth
            required
            password={passwordRepeat}
            onChangePassword={(e) => setPasswordRepeat(e.target.value)}
          />
        </Grid>
      </Grid>
    </Modal>
  );
};

export default UpdatePasswordModal;
