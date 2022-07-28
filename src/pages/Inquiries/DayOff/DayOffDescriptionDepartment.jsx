import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { getDayOffInquiry } from "../../../api";
import FormWrapper from "../../../components/Form/FormWrapper";
import InfoInquiryCreator from "../../../components/InfoInquiryCreator/InfoInquiryCreator";
import List from "../../../components/List/List";

const formatDate = (date) => new Date(date).toLocaleDateString();

const DayOffDescriptionDepartment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inquiryData, setInquiryData] = useState({});

  const listData = [
    { title: "Day off tarixi", value: formatDate(inquiryData.date) },
    { title: "Növü", value: inquiryData.type },
    { title: "Nəticə", value: inquiryData.result },
  ];

  const setDayOffInquiry = async () => {
    const data = await getDayOffInquiry(id);
    setInquiryData(data);
  };

  const handleClickEdit = () => {
    navigate("edit");
  };

  useEffect(() => {
    setDayOffInquiry();
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

export default DayOffDescriptionDepartment;
