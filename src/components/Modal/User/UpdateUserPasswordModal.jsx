import { Grid } from "@mui/material";
import { useFormik } from "formik";
import API from "../../../api";
import InputPassword from "../../Input/InputPassword";
import Button from "../../Button/Button";
import Modal from "../Modal";

const UpdatePasswordModal = ({ open, onClose, user }) => {
  const formik = useFormik({
    initialValues: {
      password: "",
      passwordRepeat: "",
    },
    onSubmit: (values) => {
      if (values.password !== values.passwordRepeat) {
        alert("Password didn't match");
        return;
      }

      API.patch(`users/${user.id}`, {
        password: values.password,
      }).then(() => {
        onClose();
        formik.resetForm();
      });
    },
  });

  return (
    <Modal
      title="Şifrənin yenilənməsi"
      open={open}
      onClose={onClose}
      onSubmit={formik.handleSubmit}
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
            required
            fullWidth
            label="Yeni şifrə"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
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

export default UpdatePasswordModal;
