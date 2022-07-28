import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { getBusinessTripInquiry } from "../../../api";
import FormWrapper from "../../../components/Form/FormWrapper";
import InfoInquiryCreator from "../../../components/InfoInquiryCreator/InfoInquiryCreator";
import List from "../../../components/List/List";

const formatDate = (date) => new Date(date).toLocaleDateString();

const BusinessTripDescriptionDepartment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inquiryData, setInquiryData] = useState({});

  const listData = [
    { title: "Başlama tarixi", value: formatDate(inquiryData.startDate) },
    { title: "Bitmə tarixi", value: formatDate(inquiryData.expirationDate) },
    { title: "Skan edilmiş sənəd", value: "" },
    { title: "Qeyd", value: inquiryData.note },
    { title: "Nəticə", value: inquiryData.result },
  ];

  const setBusinessTripInquiry = async () => {
    const data = await getBusinessTripInquiry(id);
    setInquiryData(data);
  };

  const handleClickEdit = () => {
    navigate("edit");
  };

  useEffect(() => {
    setBusinessTripInquiry();
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
          title="Departament rəhbərin göndərməsi"
          onClickEdit={handleClickEdit}
        >
          <List data={listData} />
        </FormWrapper>
      </Grid>
    </Grid>
  );
};

export default BusinessTripDescriptionDepartment;
