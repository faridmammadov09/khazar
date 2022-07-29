import { useEffect, useState } from "react";
import API, { getGuestInquiry } from "../../../api";
import DeleteInquiryModal from "../../../components/Modal/Inquiry/DeleteInquiryModal";
import InquiryTable from "../../../components/Table/InquiryTable/InquiryTable";

const Guest = () => {
  const [guestData, setGuestData] = useState([]);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState({});

  const handleOpenDeleteInquiryModal = (item) => {
    setOpenDeleteModal(true);
    setSelectedInquiry(item);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const handleDeleteInquiry = (e) => {
    e.preventDefault();

    API.delete(`guests/${selectedInquiry.id}`)
      .then(() => {
        handleCloseDeleteModal();
        getGuestData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getGuestData = async () => {
    const data = await getGuestInquiry();
    setGuestData(data);
  };

  useEffect(() => {
    getGuestData();
  }, []);

  return (
    <>
      <DeleteInquiryModal
        open={openDeleteModal}
        onClose={handleCloseDeleteModal}
        inquiry={selectedInquiry}
        onDeleteInquiry={handleDeleteInquiry}
      />

      <InquiryTable
        bodyData={guestData}
        onOpenDeleteModal={handleOpenDeleteInquiryModal}
      />
    </>
  );
};

export default Guest;
