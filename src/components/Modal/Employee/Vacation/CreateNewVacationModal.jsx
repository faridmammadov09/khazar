import { useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, TextField } from "@mui/material";
import API from "../../../../api";
import Button from "../../../Button/Button";
import InputDate from "../../../Input/InputDate";
import Modal from "../../Modal";

const CreateNewVacationModal = ({ open, onClose, getVacations }) => {
  const { employeeId } = useParams();
  const [workYearInterval, setWorkYearInterval] = useState("");
  const [main, setMain] = useState("");
  const [addition, setAddition] = useState("");
  const [used, setUsed] = useState("");
  const [remainder, setRemainder] = useState("");

  const handleCreateNewVacation = (e) => {
    e.preventDefault();

    const newVacation = {
      yearOfWork: workYearInterval,
      main: main,
      addition: addition,
      used: used,
      remainder: remainder,
      employeeId: +employeeId,
    };

    API.post(`vacationBalances`, newVacation).then(() => {
      getVacations();
      onClose();
    });
  };

  return (
    <Modal
      title="Yeni məzuniyyət"
      open={open}
      onClose={onClose}
      onSubmit={handleCreateNewVacation}
      actionButtons={
        <>
          <Button onClick={onClose}>Bağla</Button>
          <Button primary type="submit">
            Yarat
          </Button>
        </>
      }
    >
      <Grid container spacing="12px">
        <Grid item xs={6}>
          <InputDate
            required
            label="İş ili aralığı"
            value={workYearInterval}
            onChange={(newValue) => setWorkYearInterval(newValue)}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Əsas"
            required
            fullWidth
            value={main}
            onChange={(e) => setMain(e.target.value)}
          ></TextField>
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Əlavə"
            required
            fullWidth
            value={addition}
            onChange={(e) => setAddition(e.target.value)}
          ></TextField>
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="İstifadə edilmiş"
            required
            fullWidth
            value={used}
            onChange={(e) => setUsed(e.target.value)}
          ></TextField>
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Qalıq"
            required
            fullWidth
            value={remainder}
            onChange={(e) => setRemainder(e.target.value)}
          ></TextField>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default CreateNewVacationModal;
