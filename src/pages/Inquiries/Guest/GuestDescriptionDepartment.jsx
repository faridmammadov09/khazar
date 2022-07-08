import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import API from "../../../api";
import FormWrapper from "../../../components/Form/FormWrapper";
import InfoInquiryCreator from "../../../components/InfoInquiryCreator/InfoInquiryCreator";
import List from "../../../components/List/List";

const GuestDescriptionDepartment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inquiryData, setInquiryData] = useState({});

  const listData = [
    { title: "Gələcək şəxslər", value: inquiryData.comingPeople },
    { title: "Gələcək şəxslər", value: inquiryData.transportationNotes },
    { title: "Gəlmə tarixi", value: inquiryData.arrivalDate },
    { title: "Gəlmə səbəbi", value: inquiryData.reasonForComing },
    { title: "Qeyd", value: inquiryData.note },
    { title: "Nəticə", value: inquiryData.result },
  ];

  const getInquiry = async () => {
    const { data } = await API.get(`guests/${id}`);
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
          onClickEdit={handleClickEdit}
        >
          <List data={listData} />
        </FormWrapper>
      </Grid>
    </Grid>
  );
};

export default GuestDescriptionDepartment;
