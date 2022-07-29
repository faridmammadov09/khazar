import { useState, useEffect } from "react";
import { Grid, TextField } from "@mui/material";
import API from "../../../../api";
import Button from "../../../Button/Button";
import InputDate from "../../../Input/InputDate";
import Modal from "../../Modal";

const EditVacationModal = ({ open, onClose, onGetVacations, vacation }) => {
  const [workYearInterval, setWorkYearInterval] = useState("");
  const [main, setMain] = useState("");
  const [addition, setAddition] = useState("");
  const [used, setUsed] = useState("");
  const [remainder, setRemainder] = useState("");

  const fillInputs = ({ yearOfWork, main, addition, used, remainder }) => {
    setWorkYearInterval(yearOfWork);
    setMain(main);
    setAddition(addition);
    setUsed(used);
    setRemainder(remainder);
  };

  const handleEditVacation = (e) => {
    e.preventDefault();

    API.patch(`vacationBalances/${vacation.id}`, {
      yearOfWork: workYearInterval,
      main,
      addition,
      used,
      remainder,
    }).then(() => {
      onGetVacations();
      onClose();
    });
  };

  useEffect(() => {
    if (Object.keys(vacation).length !== 0) {
      fillInputs(vacation);
    }
  }, [vacation]);

  return (
    <Modal
      title="Məzuniyyətin redaktəsi"
      open={open}
      onClose={onClose}
      onSubmit={handleEditVacation}
      actionButtons={
        <>
          <Button onClick={onClose}>Bağla</Button>
          <Button primary type="submit">
            Yadda saxla
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
            required
            fullWidth
            label="Əsas"
            value={main}
            onChange={(e) => setMain(e.target.value)}
          ></TextField>
        </Grid>

        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            label="Əlavə"
            value={addition}
            onChange={(e) => setAddition(e.target.value)}
          ></TextField>
        </Grid>

        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            label="İstifadə edilmiş"
            value={used}
            onChange={(e) => setUsed(e.target.value)}
          ></TextField>
        </Grid>

        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            label="Qalıq"
            value={remainder}
            onChange={(e) => setRemainder(e.target.value)}
          ></TextField>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default EditVacationModal;
