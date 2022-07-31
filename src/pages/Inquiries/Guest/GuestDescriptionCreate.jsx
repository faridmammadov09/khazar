import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { getGuestInquiry } from "../../../api";
import FormWrapper from "../../../components/Form/FormWrapper";
import InfoInquiryCreator from "../../../components/InfoInquiryCreator/InfoInquiryCreator";
import List from "../../../components/List/List";

const formatDate = (date) => new Date(date).toLocaleDateString();

const GuestDescriptionCreate = () => {
  const { id } = useParams();
  const [inquiryData, setInquiryData] = useState({});

  const listData = [
    { title: "Gələcək şəxslər", value: inquiryData.comingPeople },
    { title: "Gələcək şəxslər", value: inquiryData.transportationNotes },
    { title: "Gəlmə tarixi", value: formatDate(inquiryData.arrivalDate) },
    { title: "Görüşəcək şəxs", value: inquiryData.meetingPerson },
    { title: "Gəlmə səbəbi", value: inquiryData.reasonForComing },
    { title: "Sorğu ilə bağlı qeyd", value: inquiryData.note },
    { title: "Nəticə", value: inquiryData.result },
  ];

  const setGuestInquiry = async () => {
    const data = await getGuestInquiry(id);
    setInquiryData(data);
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
        <FormWrapper title="Sorğunun formalaşdırılması">
          <List data={listData} />
        </FormWrapper>
      </Grid>
    </Grid>
  );
};

export default GuestDescriptionCreate;
