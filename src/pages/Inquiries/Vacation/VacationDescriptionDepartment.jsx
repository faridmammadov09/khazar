import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { getVacationInquiry } from "../../../api";
import FormWrapper from "../../../components/Form/FormWrapper";
import InfoInquiryCreator from "../../../components/InfoInquiryCreator/InfoInquiryCreator";
import List from "../../../components/List/List";

const formatDate = (date) => new Date(date).toLocaleDateString();

const VacationDescriptionDepartment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inquiryData, setInquiryData] = useState({});

  const listData = [
    { title: "Başlama tarixi", value: formatDate(inquiryData.startDate) },
    { title: "Bitmə tarixi", value: formatDate(inquiryData.expirationDate) },
    { title: "Skan edilmiş sənəd", value: "" },
    { title: "Nəticə", value: inquiryData.result },
  ];

  const setVacationInquiry = async () => {
    const data = await getVacationInquiry(id);
    setInquiryData(data);
  };

  const handleClickEdit = () => {
    navigate("edit");
  };

  useEffect(() => {
    setVacationInquiry();
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
          showDownloadButton
          title="Departament rəhbərin göndərməsi"
          onClickEdit={handleClickEdit}
        >
          <List data={listData} />
        </FormWrapper>
      </Grid>
    </Grid>
  );
};

export default VacationDescriptionDepartment;
