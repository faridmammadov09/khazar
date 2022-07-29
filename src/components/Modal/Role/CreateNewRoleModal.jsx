import { Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import API from "../../../api";
import Autocomplete from "../../Input/Autocomplete";
import Button from "../../Button/Button";
import RadioGroup from "../../RadioGroup/RadioGroup";
import Modal from "../Modal";

const CreateNewRoleModal = ({ open, onClose, getUserRoles }) => {
  const formik = useFormik({
    initialValues: {
      isRoleStatic: false,
      name: "",
      distinctiveName: "",
      authorities: [],
      description: "",
    },
    onSubmit: (values) => {
      const { name, isRoleStatic, description, distinctiveName, authorities } =
        values;

      API.post("userRoles", {
        name,
        isStatic: Boolean(isRoleStatic),
        description,
        distinctiveName,
        authorities,
      }).then(() => {
        onClose();
        getUserRoles();
        formik.resetForm();
      });
    },
  });

  return (
    <Modal
      title="Yeni rol"
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
        <Grid item xs={12}>
          <RadioGroup
            required
            title="Rol statikdir?"
            name="isRoleStatic"
            value={formik.values.isRoleStatic}
            onChange={formik.handleChange}
            options={[
              { label: "Hə", value: true },
              { label: "Yox", value: false },
            ]}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Adı"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          ></TextField>
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Fərqləndirici ad"
            name="distinctiveName"
            value={formik.values.distinctiveName}
            onChange={formik.handleChange}
          ></TextField>
        </Grid>

        <Grid item xs={12}>
          <Autocomplete
            required
            label="Səlahiyyətlər"
            name="authorities"
            value={formik.values.authorities}
            onChange={(event, newValue) =>
              formik.setFieldValue("authorities", newValue)
            }
            options={["APP_DELETE", "EDIT"]}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Təsviri"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
          ></TextField>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default CreateNewRoleModal;
