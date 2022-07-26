import { Typography } from "@mui/material";
import API from "../../../api";
import Button from "../../Button/Button";
import Modal from "../Modal";

const DeleteAnnouncementModal = ({
  open,
  onClose,
  announcement,
  getAnnouncements,
}) => {
  const handleDeleteAnnouncement = (e) => {
    e.preventDefault();

    API.delete(`announcements/${announcement.id}`).then(() => {
      onClose();
      getAnnouncements();
    });
  };

  return (
    <Modal
      title="Elanın silinməsi"
      open={open}
      onClose={onClose}
      onSubmit={handleDeleteAnnouncement}
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
        <b>{announcement.name}</b> elanını silmək istədiyinizə əminsiniz?
      </Typography>
    </Modal>
  );
};

export default DeleteAnnouncementModal;
