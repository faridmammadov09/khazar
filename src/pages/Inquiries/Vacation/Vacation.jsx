import { useEffect, useState } from "react";
import API, { getVacationInquiry } from "../../../api";
import DeleteInquiryModal from "../../../components/Modal/Inquiry/DeleteInquiryModal";
import InquiryTable from "../../../components/Table/InquiryTable/InquiryTable";

const Vacation = () => {
  const [vacationInfoData, setVacationInfoData] = useState([]);
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

    API.delete(`vacationInfo/${selectedInquiry.id}`)
      .then(() => {
        handleCloseDeleteModal();
        getVacationInfoData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getVacationInfoData = async () => {
    const data = await getVacationInquiry();
    setVacationInfoData(data);
  };

  useEffect(() => {
    getVacationInfoData();
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
        bodyData={vacationInfoData}
        onOpenDeleteModal={handleOpenDeleteInquiryModal}
      />
    </>
  );
};

export default Vacation;
