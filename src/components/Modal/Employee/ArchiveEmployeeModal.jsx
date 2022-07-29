import { Typography } from "@mui/material";
import Button from "../../Button/Button";
import Modal from "../Modal";

const ArchiveEmployeeModal = ({ open, onClose, onArchive, employee }) => {
  const { fullName, isArchived } = employee;

  return (
    <Modal
      title="Əməkdaşın arxivlənməsi"
      open={open}
      onClose={onClose}
      actionButtons={
        <>
          <Button onClick={onClose}>İmtina et</Button>
          <Button onClick={onArchive} primary>
            {isArchived ? "Arxivdən çıxar" : "Arxiv et"}
          </Button>
        </>
      }
    >
      <Typography>
        <b>“{fullName}”</b> haqqında məlumatları{" "}
        {isArchived ? "arxivdən çıxarmaq istədiyinizə" : "arxivləməyə"}{" "}
        əminsiniz?
      </Typography>
    </Modal>
  );
};

export default ArchiveEmployeeModal;
