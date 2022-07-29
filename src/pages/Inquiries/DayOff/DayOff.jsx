import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import API, { getDayOffInquiry } from "../../../api";
import DeleteInquiryModal from "../../../components/Modal/Inquiry/DeleteInquiryModal";
import SearchPanelDayOff from "../../../components/SearchPanel/SearchPanelDayOff";
import InquiryTable from "../../../components/Table/InquiryTable/InquiryTable";

const DayOff = () => {
  const [dayOffsData, setDayOffsData] = useState([]);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState({});

  const isShowDayOffSearchPanel = useSelector(
    (state) => state.app.isShowDayOffSearchPanel
  );

  const handleOpenDeleteInquiryModal = (item) => {
    setOpenDeleteModal(true);
    setSelectedInquiry(item);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const handleDeleteInquiry = (e) => {
    e.preventDefault();

    API.delete(`dayOffs/${selectedInquiry.id}`)
      .then(() => {
        handleCloseDeleteModal();
        getDayOffsData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDayOffsData = async () => {
    const data = await getDayOffInquiry();
    setDayOffsData(data);
  };

  useEffect(() => {
    getDayOffsData();
  }, []);

  return (
    <>
      {isShowDayOffSearchPanel && <SearchPanelDayOff />}

      <DeleteInquiryModal
        open={openDeleteModal}
        onClose={handleCloseDeleteModal}
        inquiry={selectedInquiry}
        onDeleteInquiry={handleDeleteInquiry}
      />

      <InquiryTable
        bodyData={dayOffsData}
        onOpenDeleteModal={handleOpenDeleteInquiryModal}
      />
    </>
  );
};

export default DayOff;
