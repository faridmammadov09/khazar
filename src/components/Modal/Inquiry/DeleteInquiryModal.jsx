import { Typography } from "@mui/material";
import Button from "../../Button/Button";
import Modal from "../Modal";

const DeleteInquiryModal = ({ open, onClose, inquiry, onDeleteInquiry }) => {
  return (
    <Modal
      title="Sorğunun silinməsi"
      open={open}
      onClose={onClose}
      onSubmit={onDeleteInquiry}
      actionButtons={
        <>
          <Button onClick={onClose}>İmtina et</Button>
          <Button type="submit" primary>
            Sil
          </Button>
        </>
      }
    >
      <Typography>
        <b>{inquiry.fullName}</b> tərəfindən yaradılan bu sorğunu silmək
        istədiyinizə əminsiniz?
      </Typography>
    </Modal>
  );
};

export default DeleteInquiryModal;
