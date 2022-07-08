import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import API from "../../../api";
import FormWrapper from "../../../components/Form/FormWrapper";
import InfoInquiryCreator from "../../../components/InfoInquiryCreator/InfoInquiryCreator";
import List from "../../../components/List/List";
import InquiryDetailsModal from "../../../components/Modal/InquiryDetailsModal/InquiryDetailsModal";

const DayOffDescriptionHr = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inquiryData, setInquiryData] = useState({});
  const [openShowDetailsModal, setOpenShowDetailsModal] = useState(false);

  const listData = [
    { title: "Day off tarixi", value: inquiryData.date },
    { title: "Növü", value: inquiryData.type },
    { title: "Nəticə", value: inquiryData.result },
  ];

  const getInquiry = async () => {
    const { data } = await API.get(`dayOffs/${id}`);
    setInquiryData(data);
  };

  const handleClickEdit = () => {
    navigate("edit");
  };

  const handleClickInfo = () => {
    setOpenShowDetailsModal(true);
  };

  const handleCloseDetailsModal = () => {
    setOpenShowDetailsModal(false);
  };

  useEffect(() => {
    getInquiry();
  }, []);

  return (
    <>
      <InquiryDetailsModal
        open={openShowDetailsModal}
        onClose={handleCloseDetailsModal}
        inquiryData={inquiryData}
      />

      <Grid container sx={{ justifyContent: "center" }} spacing={2}>
        <Grid item xs={10}>
          <InfoInquiryCreator name={inquiryData.fullName} />
        </Grid>

        <Grid item xs={10}>
          <FormWrapper
            title="HR göndərməsi"
            showEditButton
            showInfoButton
            onClickEdit={handleClickEdit}
            onClickInfo={handleClickInfo}
          >
            <List data={listData} />
          </FormWrapper>
        </Grid>
      </Grid>
    </>
  );
};

export default DayOffDescriptionHr;
