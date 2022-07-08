import { useEffect, useState } from "react";
import API from "../../api";
import DeleteAnnouncementModal from "../../components/Modal/Announcement/DeleteAnnouncementModal";
import AnnouncementTable from "../../components/Table/AnnouncementTable/AnnouncementTable";

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const getAnnouncements = async () => {
    const { data } = await API.get("announcements");
    setAnnouncements(data);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const handleDeleteAnnouncement = () => {
    setOpenDeleteModal(true);
  };

  useEffect(() => {
    getAnnouncements();
  }, []);

  return (
    <>
      <DeleteAnnouncementModal
        open={openDeleteModal}
        onClose={handleCloseDeleteModal}
      />

      <AnnouncementTable
        headerData={[
          "Adı",
          "Təsviri",
          "Əlavə edən şəxs",
          "Əlavə edilmə tarixi",
        ]}
        bodyData={announcements}
        onClickDelete={handleDeleteAnnouncement}
      />
    </>
  );
};

export default Announcement;
