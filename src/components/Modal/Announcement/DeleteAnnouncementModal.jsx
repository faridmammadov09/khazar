import { Typography } from "@mui/material";
import Button from "../../Button/Button";
import Modal from "../Modal";

const DeleteAnnouncementModal = ({ open, onClose }) => {
  return (
    <Modal
      title="Elanın silinməsi"
      open={open}
      onClose={onClose}
      actionButtons={
        <>
          <Button onClick={onClose}>İmtina et</Button>
          <Button onClick={onClose} primary>
            Sil
          </Button>
        </>
      }
    >
      <Typography>
        <b>Bayram</b> elanını silmək istədiyinizə əminsiniz?
      </Typography>
    </Modal>
  );
};

export default DeleteAnnouncementModal;
