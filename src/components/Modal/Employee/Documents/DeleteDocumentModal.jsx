import { Typography } from "@mui/material";
import API from "../../../../api";
import Button from "../../../Button/Button";
import Modal from "../../Modal";

const DeleteDocumentModal = ({ open, onClose, getDocuments, document }) => {
  const handleDeleteDocument = (e) => {
    e.preventDefault();

    API.delete(`documents/${document.id}`).then(() => {
      onClose();
      getDocuments();
    });
  };

  return (
    <Modal
      title="Sənədin silinməsi"
      open={open}
      onClose={onClose}
      onSubmit={handleDeleteDocument}
      actionButtons={
        <>
          <Button onClick={onClose}>İmtina et</Button>
          <Button primary type="submit">
            Sil
          </Button>
        </>
      }
    >
      <Typography>
        <b>{document.type}</b> tipli sənədi silmək istədiyinizdən əminsiniz?
      </Typography>
    </Modal>
  );
};

export default DeleteDocumentModal;
