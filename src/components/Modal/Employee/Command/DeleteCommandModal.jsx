import { Typography } from "@mui/material";
import API from "../../../../api";
import Button from "../../../Button/Button";
import Modal from "../../Modal";

const DeleteCommandModal = ({
  open,
  onClose,
  onFetchEmployeeCommands,
  command,
}) => {
  const handleDeleteCommand = (e) => {
    e.preventDefault();

    API.delete(`commands/${command.id}`).then(() => {
      onFetchEmployeeCommands();
      onClose();
    });
  };

  return (
    <Modal
      title="Əmrin silinməsi"
      open={open}
      onClose={onClose}
      onSubmit={handleDeleteCommand}
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
        <b>{command.number}</b> nömrəli əmri silmək istədiyinizdən əminsiniz?
      </Typography>
    </Modal>
  );
};

export default DeleteCommandModal;
