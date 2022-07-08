import { useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, TextField } from "@mui/material";
import API from "../../../../api";
import Button from "../../../Button/Button";
import Modal from "../../Modal";
import Select from "../../../Select/Select";
import Autocomplete from "../../../Input/Autocomplete";

const CreateNewDocumentModal = ({ open, onClose, getDocuments }) => {
  const { employeeId } = useParams();
  const [type, setType] = useState("");
  const [uploadDocument, setUploadDocument] = useState([]);
  const [note, setNote] = useState("");

  const clearInputs = () => {
    setType("");
    setUploadDocument([]);
    setNote("");
  };

  const handleCreateNewDocument = (e) => {
    e.preventDefault();

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
      clearInputs();
    });
  };

  return (
    <Modal
      title="Yeni sənəd"
      open={open}
      onClose={onClose}
      onSubmit={handleCreateNewDocument}
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
            value={type}
            onChange={(newValue) => setType(newValue)}
            options={["CV", "Sertifikat", "Foto şəkil", "Şəxsi sənəd"]}
          />
        </Grid>

        <Grid item xs={6}>
          <Autocomplete
            label="Sənəd yüklə"
            value={uploadDocument}
            onChange={(event, newValue) => setUploadDocument(newValue)}
            options={["Sənəd 1", "Sənəd 2", "Sənəd 3"]}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Qeyd"
            required
            fullWidth
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></TextField>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default CreateNewDocumentModal;
