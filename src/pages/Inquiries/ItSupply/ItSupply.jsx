import { useEffect, useState } from "react";
import API, { getSupplyInquiry } from "../../../api";
import DeleteInquiryModal from "../../../components/Modal/Inquiry/DeleteInquiryModal";
import InquiryTable from "../../../components/Table/InquiryTable/InquiryTable";

const ItSupply = () => {
  const [itSupplyData, setItSupplyData] = useState([]);
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

    API.delete(`itSupplies/${selectedInquiry.id}`)
      .then(() => {
        handleCloseDeleteModal();
        getItSupplyData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getItSupplyData = async () => {
    const data = await getSupplyInquiry();
    setItSupplyData(data);
  };

  useEffect(() => {
    getItSupplyData();
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
        bodyData={itSupplyData}
        onOpenDeleteModal={handleOpenDeleteInquiryModal}
      />
    </>
  );
};

export default ItSupply;
