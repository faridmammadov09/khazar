import { useEffect, useState } from "react";
import API, { getBusinessTripInquiry } from "../../../api";
import DeleteInquiryModal from "../../../components/Modal/Inquiry/DeleteInquiryModal";
import InquiryTable from "../../../components/Table/InquiryTable/InquiryTable";

const BusinessTrip = () => {
  const [businessTripData, setBusinessTripData] = useState([]);
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

    API.delete(`businessTrip/${selectedInquiry.id}`)
      .then(() => {
        handleCloseDeleteModal();
        getBusinessTripData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getBusinessTripData = async () => {
    const data = await getBusinessTripInquiry();
    setBusinessTripData(data);
  };

  useEffect(() => {
    getBusinessTripData();
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
        bodyData={businessTripData}
        onOpenDeleteModal={handleOpenDeleteInquiryModal}
      />
    </>
  );
};

export default BusinessTrip;
