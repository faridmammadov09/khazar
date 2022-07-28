import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Grid, Paper, Stack, Typography } from "@mui/material";
import { getGuestInquiry } from "../../../api";
import FormWrapper from "../../../components/Form/FormWrapper";
import InfoInquiryCreator from "../../../components/InfoInquiryCreator/InfoInquiryCreator";
import List from "../../../components/List/List";
import InquiryDetailsModal from "../../../components/Modal/InquiryDetailsModal/InquiryDetailsModal";

const formatDate = (date) => new Date(date).toLocaleDateString();

const GuestDescriptionEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inquiryData, setInquiryData] = useState({});
  const [openShowDetailsModal, setOpenShowDetailsModal] = useState(false);

  const listData = [
    { title: "Gələcək şəxslər", value: inquiryData.comingPeople },
    { title: "Gələcək şəxslər", value: inquiryData.transportationNotes },
    { title: "Gəlmə tarixi", value: formatDate(inquiryData.arrivalDate) },
    { title: "Görüşəcək şəxs", value: inquiryData.meetingPerson },
    { title: "Gəlmə səbəbi", value: inquiryData.reasonForComing },
    { title: "Sorğu ilə bağlı qeyd", value: inquiryData.note },
    { title: "Nəticə", value: inquiryData.result },
  ];

  const guestListData = [
    {
      title: "Status",
      value: "Gəldi",
    },
    {
      title: "Gəlmə tarixi",
      value: "11/06/2021 13:32",
    },
    {
      title: "Getmə tarixi",
      value: "11/06/2021 18:32",
    },
    {
      title: "Qeyd",
      value: "Hər şey qaydasındadır",
    },
  ];

  const setGuestInquiry = async () => {
    const data = await getGuestInquiry(id);
    setInquiryData(data);
  };

  const handleClickEdit = () => {
    navigate("edit");
  };

  const handleClickInfo = () => {
    setOpenShowDetailsModal(true);
  };

  const handleCloseDetailsModal = () => {
    setOpenShowDetailsModal(false);
  };

  useEffect(() => {
    setGuestInquiry();
  }, []);

  return (
    <>
      <InquiryDetailsModal
        open={openShowDetailsModal}
        onClose={handleCloseDetailsModal}
        inquiryData={inquiryData}
      />

      <Grid container sx={{ justifyContent: "center" }} spacing={2}>
        <Grid item xs={10}>
          <InfoInquiryCreator name={inquiryData.fullName} />
        </Grid>

        <Grid item xs={10}>
          <FormWrapper
            showEditButton
            showInfoButton
            title="NBM əməkdaşın göndərməsi"
            onClickEdit={handleClickEdit}
            onClickInfo={handleClickInfo}
          >
            <List data={listData} />

            <Typography
              variant="subtitle1"
              sx={{ fontSize: "18px", fontWeight: "700", marginY: "12px" }}
            >
              Qonaqlar
            </Typography>
            <Stack spacing={2}>
              <Paper variant="outlined" elevation={0} sx={{ padding: 2 }}>
                <Typography paddingBottom={2} fontWeight>
                  Məhəmməd Valiyev
                </Typography>
                <List data={guestListData} />
              </Paper>
              <Paper variant="outlined" elevation={0} sx={{ padding: 2 }}>
                <Typography paddingBottom={2} fontWeight>
                  İlqar Abbasov
                </Typography>
                <List data={guestListData} />
              </Paper>
              <Paper variant="outlined" elevation={0} sx={{ padding: 2 }}>
                <Typography paddingBottom={2} fontWeight>
                  Zümrüd Hüseynova
                </Typography>
                <List data={guestListData} />
              </Paper>
            </Stack>
          </FormWrapper>
        </Grid>
      </Grid>
    </>
  );
};

export default GuestDescriptionEmployee;
