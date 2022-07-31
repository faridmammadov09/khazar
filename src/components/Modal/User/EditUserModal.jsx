import { useEffect, useState } from "react";
import { Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { object, string } from "yup";
import API from "../../../api";
import TheSelect from "../../Select/Select";
import Button from "../../Button/Button";
import Autocomplete from "../../Input/Autocomplete";
import Modal from "../Modal";

const validationSchema = object({
  userName: string()
    .required("İstifadəçi adı zəruridir")
    .min(4, "İstifadəçi adı ən azı 4 simvoldan ibarət olmalıdır")
    .max(20, "İstifadəçi adı ən çox 20 simvoldan ibarət olmalıdır"),
});

const EditUserModal = ({ open, onClose, getUsers, user }) => {
  const [roleOptions, setRoleOptions] = useState([]);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      userName: "",
      roles: [],
    },
    onSubmit: (values) => {
      const { userName, roles } = values;

      API.patch(`users/${user.id}`, {
        userName,
        roles,
      }).then(() => {
        onClose();
        getUsers();
      });
    },
    validationSchema,
  });

  const fillInputs = ({ fullName, userName, roles }) => {
    formik.setFieldValue("fullName", fullName);
    formik.setFieldValue("userName", userName);
    formik.setFieldValue("roles", roles);
  };

  const fetchUserRoles = async () => {
    const { data } = await API.get("userRoles");
    const roles = data.map((item) => item.name);
    setRoleOptions(roles);
  };

  useEffect(() => {
    fetchUserRoles();
  }, []);

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      fillInputs(user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Modal
      title="İstifadəçinin redaktəsi"
      open={open}
      onClose={onClose}
      onSubmit={formik.handleSubmit}
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
            required
            disabled
            label="Əməkdaş"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            options={[formik.values.fullName]}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            label="Istifadəçi adı"
            name="userName"
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.userName && !!formik.errors.userName}
            helperText={formik.touched.userName && formik.errors.userName}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            required
            label="Rollar"
            value={formik.values.roles}
            options={roleOptions}
            onChange={(event, newValue) => {
              formik.setFieldValue("roles", newValue);
            }}
          />
        </Grid>
      </Grid>
    </Modal>
  );
};

export default EditUserModal;
