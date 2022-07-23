import { useParams } from "react-router-dom";
import { Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import API from "../../../../api";
import Button from "../../../Button/Button";
import Modal from "../../Modal";
import Select from "../../../Select/Select";
import Autocomplete from "../../../Input/Autocomplete";

const CreateNewDocumentModal = ({ open, onClose, getDocuments }) => {
  const { employeeId } = useParams();

  const formik = useFormik({
    initialValues: {
      type: "",
      uploadDocument: [],
      note: "",
    },
    onSubmit: (values) => {
      console.log(values);
      const { type, uploadDocument, note } = values;

      const newDocument = {
        type,
        name: type,
        uploadDocument,
        description: note,
        employeeId: +employeeId,
      };

      API.post("documents", newDocument).then(() => {
        onClose();
        getDocuments();
        formik.resetForm();
      });
    },
  });

  return (
    <Modal
      title="Yeni sənəd"
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
      <Grid container spacing="12px">
        <Grid item xs={6}>
          <Select
            required
            label="Tipi"
            name="type"
            value={formik.values.type}
            onChange={formik.handleChange}
            options={["CV", "Sertifikat", "Foto şəkil", "Şəxsi sənəd"]}
          />
        </Grid>

        <Grid item xs={6}>
          <Autocomplete
            label="Sənəd yüklə"
            name="uploadDocument"
            value={formik.values.uploadDocument}
            onChange={(event, newValue) =>
              formik.setFieldValue("uploadDocument", newValue)
            }
            options={["Sənəd 1", "Sənəd 2", "Sənəd 3"]}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Qeyd"
            name="note"
            value={formik.values.note}
            onChange={formik.handleChange}
          ></TextField>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default CreateNewDocumentModal;
