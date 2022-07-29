import { useEffect, useState } from "react";
import API, { getPurchasingInquiry } from "../../../api";
import DeleteInquiryModal from "../../../components/Modal/Inquiry/DeleteInquiryModal";
import InquiryTable from "../../../components/Table/InquiryTable/InquiryTable";

const Purchasing = () => {
  const [purchasingData, setPurchasingData] = useState([]);
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

    API.delete(`purchases/${selectedInquiry.id}`)
      .then(() => {
        handleCloseDeleteModal();
        getPurchasingData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPurchasingData = async () => {
    const data = await getPurchasingInquiry();
    setPurchasingData(data);
  };

  useEffect(() => {
    getPurchasingData();
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
        bodyData={purchasingData}
        onOpenDeleteModal={handleOpenDeleteInquiryModal}
      />
    </>
  );
};

export default Purchasing;
