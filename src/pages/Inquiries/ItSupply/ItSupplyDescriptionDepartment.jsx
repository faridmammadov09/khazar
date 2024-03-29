import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { getSupplyInquiry } from "../../../api";
import FormWrapper from "../../../components/Form/FormWrapper";
import InfoInquiryCreator from "../../../components/InfoInquiryCreator/InfoInquiryCreator";
import List from "../../../components/List/List";

const ItSupplyDescriptionDepartment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inquiryData, setInquiryData] = useState({});

  const listData = [
    { title: "Qeyd", value: inquiryData.note },
    { title: "Nəticə mətni", value: inquiryData.resultText },
    { title: "Nəticə", value: inquiryData.result },
  ];

  const setSupplyInquiry = async () => {
    const data = await getSupplyInquiry(id);
    setInquiryData(data);
  };

  const handleClickEdit = () => {
    navigate("edit");
  };

  useEffect(() => {
    setSupplyInquiry();
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
          title="Departament rəhbərin göndərməsi"
          onClickEdit={handleClickEdit}
        >
          <List data={listData} />
        </FormWrapper>
      </Grid>
    </Grid>
  );
};

export default ItSupplyDescriptionDepartment;
