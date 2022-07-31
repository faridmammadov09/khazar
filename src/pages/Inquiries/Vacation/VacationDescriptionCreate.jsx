import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { getVacationInquiry } from "../../../api";
import FormWrapper from "../../../components/Form/FormWrapper";
import InfoInquiryCreator from "../../../components/InfoInquiryCreator/InfoInquiryCreator";
import List from "../../../components/List/List";

const formatDate = (date) => new Date(date).toLocaleDateString();

const VacationDescriptionCreate = () => {
  const { id } = useParams();
  const [inquiryData, setInquiryData] = useState({});

  const listData = [
    {
      title: "Başlama tarixi",
      value: formatDate(inquiryData.startDate),
    },
    {
      title: "Bitmə tarixi",
      value: formatDate(inquiryData.expirationDate),
    },
    { title: "Nəticə", value: inquiryData.result },
  ];

  const setVacationInquiry = async () => {
    const data = await getVacationInquiry(id);
    setInquiryData(data);
  };

  useEffect(() => {
    setVacationInquiry();
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

export default VacationDescriptionCreate;
