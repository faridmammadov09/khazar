import { Typography } from "@mui/material";
import Button from "../../Button/Button";
import Modal from "../Modal";

const ArchiveEmployeeModal = ({ open, onClose, onArchive, name }) => {
  return (
    <Modal
      title="Əməkdaşın arxivlənməsi"
      open={open}
      onClose={onClose}
      actionButtons={
        <>
          <Button onClick={onClose}>İmtina et</Button>
          <Button onClick={onArchive} primary>
            Arxiv et
          </Button>
        </>
      }
    >
      <Typography>
        <b>“{name}”</b> haqqında məlumatları arxivləməyə əminsiniz?
      </Typography>
    </Modal>
  );
};

export default ArchiveEmployeeModal;
