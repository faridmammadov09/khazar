import { useState, useEffect } from "react";
import { Grid, TextField } from "@mui/material";
import API from "../../../../api";
import Button from "../../../Button/Button";
import Modal from "../../Modal";
import Select from "../../../Select/Select";
import Autocomplete from "../../../Input/Autocomplete";

const EditDocumentModal = ({ open, onClose, getDocuments, document }) => {
  const [type, setType] = useState("");
  const [uploadDocument, setUploadDocument] = useState([]);
  const [note, setNote] = useState("");

  const fillInputs = ({ type, uploadDocument, description }) => {
    setType(type);
    setNote(description);
    setUploadDocument(uploadDocument);
  };

  const handleEditDocument = (e) => {
    e.preventDefault();

    API.patch(`documents/${document.id}`, {
      type,
      uploadDocument,
      description: note,
    }).then(() => {
      onClose();
      getDocuments();
    });
  };

  useEffect(() => {
    if (Object.keys(document).length !== 0) {
      fillInputs(document);
    }
  }, [document]);

  return (
    <Modal
      title="Sənədin redaktəsi"
      open={open}
      onClose={onClose}
      onSubmit={handleEditDocument}
      actionButtons={
        <>
          <Button onClick={onClose}>Bağla</Button>
          <Button primary type="submit">
            Yadda saxla
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
            options={[
              "CV",
              "Sertifikat",
              "Foto şəkil",
              "Şəxsi sənəd",
              "Profil şəkil",
            ]}
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

export default EditDocumentModal;
