import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { getSupplyInquiry } from "../../../api";
import FormWrapper from "../../../components/Form/FormWrapper";
import InfoInquiryCreator from "../../../components/InfoInquiryCreator/InfoInquiryCreator";
import List from "../../../components/List/List";

const ItSupplyDescriptionCreate = () => {
  const { id } = useParams();
  const [inquiryData, setInquiryData] = useState({});

  const listData = [
    { title: "Problemin təsviri", value: inquiryData.descriptionProblem },
    { title: "Nəticə", value: inquiryData.result },
  ];

  const setSupplyInquiry = async () => {
    const data = await getSupplyInquiry(id);
    setInquiryData(data);
  };

  useEffect(() => {
    setSupplyInquiry();
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

export default ItSupplyDescriptionCreate;
