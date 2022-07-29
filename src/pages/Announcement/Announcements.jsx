import { useEffect, useState } from "react";
import { getAnnouncement } from "../../api";
import DeleteAnnouncementModal from "../../components/Modal/Announcement/DeleteAnnouncementModal";
import AnnouncementTable from "../../components/Table/AnnouncementTable/AnnouncementTable";

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState({});

  const getAnnouncements = async () => {
    const data = await getAnnouncement();
    setAnnouncements(data);
  };

  const handleOpenDeleteAnnouncementModal = (item) => {
    setOpenDeleteModal(true);
    setSelectedAnnouncement(item);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  useEffect(() => {
    getAnnouncements();
  }, []);

  return (
    <>
      <DeleteAnnouncementModal
        open={openDeleteModal}
        onClose={handleCloseDeleteModal}
        announcement={selectedAnnouncement}
        getAnnouncements={getAnnouncements}
      />

      <AnnouncementTable
        headerData={[
          "Adı",
          "Təsviri",
          "Əlavə edən şəxs",
          "Əlavə edilmə tarixi",
        ]}
        bodyData={announcements}
        onOpenDeleteModal={handleOpenDeleteAnnouncementModal}
      />
    </>
  );
};

export default Announcement;
