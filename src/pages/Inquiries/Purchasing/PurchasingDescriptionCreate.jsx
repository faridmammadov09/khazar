import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import API from "../../../api";
import FormWrapper from "../../../components/Form/FormWrapper";
import InfoInquiryCreator from "../../../components/InfoInquiryCreator/InfoInquiryCreator";
import List from "../../../components/List/List";

const PurchasingDescriptionCreate = () => {
  const { id } = useParams();
  const [inquiryData, setInquiryData] = useState({});

  const listData = [
    { title: "Qeyd", value: inquiryData.note },
    { title: "Nəticə", value: inquiryData.result },
  ];

  const getInquiry = async () => {
    const { data } = await API.get(`purchases/${id}`);
    setInquiryData(data);
  };

  useEffect(() => {
    getInquiry();
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

export default PurchasingDescriptionCreate;
