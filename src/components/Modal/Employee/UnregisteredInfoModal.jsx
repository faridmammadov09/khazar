import { Typography } from "@mui/material";
import Button from "../../Button/Button";
import Modal from "../Modal";

const UnregisteredModal = ({ open, onClose }) => {
  return (
    <Modal
      title="Qeydə alınmamış məlumatlar"
      open={open}
      onClose={onClose}
      actionButtons={
        <>
          <Button onClick={onClose}>İmtina et</Button>
          <Button onClick={onClose} primary>
            Çıxış et
          </Button>
        </>
      }
    >
      <Typography>
        <b>Xəyalə Aslanova</b> haqqında dəyişilən məlumatlar yadda
        saxlanılmayacaq
      </Typography>
    </Modal>
  );
};

export default UnregisteredModal;
