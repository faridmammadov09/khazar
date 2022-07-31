import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { getGuestInquiry } from "../../../api";
import FormWrapper from "../../../components/Form/FormWrapper";
import InfoInquiryCreator from "../../../components/InfoInquiryCreator/InfoInquiryCreator";
import List from "../../../components/List/List";

const formatDate = (date) => new Date(date).toLocaleDateString();

const GuestDescriptionChief = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inquiryData, setInquiryData] = useState({});

  const listData = [
    { title: "Gələcək şəxslər", value: inquiryData.comingPeople },
    { title: "Gələcək şəxslər", value: inquiryData.transportationNotes },
    { title: "Gəlmə tarixi", value: formatDate(inquiryData.arrivalDate) },
    { title: "Gəlmə səbəbi", value: inquiryData.reasonForComing },
    { title: "Qeyd", value: inquiryData.note },
    { title: "Nəticə", value: inquiryData.result },
  ];

  const setGuestInquiry = async () => {
    const data = await getGuestInquiry(id);
    setInquiryData(data);
  };

  const handleClickEdit = () => {
    navigate("edit");
  };

  useEffect(() => {
    setGuestInquiry();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container sx={{ justifyContent: "center" }} spacing={2}>
      <Grid item xs={10}>
        <InfoInquiryCreator name={inquiryData.fullName} />
      </Grid>

      <Grid item xs={10}>
        <FormWrapper
          showEditButton
          showInfoButton
          title="NMB rəisin göndərməsi"
          onClickEdit={handleClickEdit}
        >
          <List data={listData} />
        </FormWrapper>
      </Grid>
    </Grid>
  );
};

export default GuestDescriptionChief;
