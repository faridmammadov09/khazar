import { Typography } from "@mui/material";
import API from "../../../api";
import Button from "../../Button/Button";
import Modal from "../Modal";

const DeleteRoleModal = ({ open, onClose, getUserRoles, role }) => {
  const handleDeleteRole = (e) => {
    e.preventDefault();

    API.delete(`userRoles/${role.id}`).then(() => {
      onClose();
      getUserRoles();
    });
  };

  return (
    <Modal
      title="Rolun silinməsi"
      open={open}
      onClose={onClose}
      onSubmit={handleDeleteRole}
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
        <b>{role.name}</b> rolunu silmək istədiyinizə əminsiniz?
      </Typography>
    </Modal>
  );
};

export default DeleteRoleModal;
