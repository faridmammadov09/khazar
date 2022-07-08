import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import API from "../../../api";
import FormWrapper from "../../../components/Form/FormWrapper";
import InfoInquiryCreator from "../../../components/InfoInquiryCreator/InfoInquiryCreator";
import List from "../../../components/List/List";

const VacationDescriptionDepartment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inquiryData, setInquiryData] = useState({});

  const listData = [
    { title: "Başlama tarixi", value: inquiryData.startDate },
    { title: "Bitmə tarixi", value: inquiryData.expirationDate },
    { title: "Skan edilmiş sənəd", value: "" },
    { title: "Nəticə", value: inquiryData.result },
  ];

  const getInquiry = async () => {
    const { data } = await API.get(`vacationInfo/${id}`);
    setInquiryData(data);
  };

  const handleClickEdit = () => {
    navigate("edit");
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
        <FormWrapper
          title="Departament rəhbərin göndərməsi"
          showEditButton
          showInfoButton
          showDownloadButton
          onClickEdit={handleClickEdit}
        >
          <List data={listData} />
        </FormWrapper>
      </Grid>
    </Grid>
  );
};

export default VacationDescriptionDepartment;
