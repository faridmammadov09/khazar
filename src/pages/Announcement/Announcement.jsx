import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { getAnnouncement } from "../../api";
import FormWrapper from "../../components/Form/FormWrapper";
import List from "../../components/List/List";

const Announcement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [announcement, setAnnouncement] = useState([]);

  const setAnnouncementData = async () => {
    const data = await getAnnouncement(id);
    setAnnouncement([
      { title: "Adı", value: data.name },
      { title: "Təsviri", value: data.description },
    ]);
  };

  const handleClickEdit = () => {
    navigate("edit");
  };

  useEffect(() => {
    setAnnouncementData();
  }, []);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={10}>
        <FormWrapper
          showEditButton
          title="Elanın təsviri"
          onClickEdit={handleClickEdit}
        >
          <List data={announcement}></List>
        </FormWrapper>
      </Grid>
    </Grid>
  );
};

export default Announcement;
