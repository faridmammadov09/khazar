import { useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, TextField } from "@mui/material";
import API from "../../../../api";
import Button from "../../../Button/Button";
import InputDate from "../../../Input/InputDate";
import Select from "../../../Select/Select";
import Modal from "../../Modal";

const commandTypes = [
  "İşə qəbul edilməsi barədə",
  "İşçinin mükafatlandırılması haqqında",
  "Məzuniyyətin verilməsi barədə",
  "Vəzifə maaşının artırılması barədə",
  "Ezamiyyə əmri",
  "Əmək müqaviləsinə xitam verilməsi barədə",
  "Başqa işə keçirilmə əmri",
  "İnzibati tənbeh əmri",
  "Təhsil məzuniyyəti",
  "Sosial məzuniyyət",
  "Öz hesabına məzuniyyət",
];

const CreateNewCommandModal = ({ open, onClose, onFetchEmployeeCommands }) => {
  const { employeeId } = useParams();
  const [commandType, setCommandType] = useState("");
  const [commandNumber, setCommandNumber] = useState("");
  const [commandDate, setCommandDate] = useState("");

  const clearInputs = () => {
    setCommandType("");
    setCommandNumber("");
    setCommandDate("");
  };

  const handleCreateNewCommand = (e) => {
    e.preventDefault();

    const newCommand = {
      type: commandType,
      number: commandNumber,
      date: commandDate,
      responsiblePerson: "Joe Doe",
      employeeId,
    };

    API.post("commands", newCommand).then(() => {
      onFetchEmployeeCommands();
      onClose();
      clearInputs();
    });
  };

  return (
    <Modal
      title="Yeni əmr"
      open={open}
      onClose={onClose}
      onSubmit={handleCreateNewCommand}
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
        <Grid item xs={12}>
          <Select
            label="Tipi"
            value={commandType}
            onChange={(value) => setCommandType(value)}
            options={commandTypes}
            required
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            type="number"
            label="Nömrəsi"
            required
            fullWidth
            value={commandNumber}
            onChange={(e) => setCommandNumber(e.target.value)}
          ></TextField>
        </Grid>

        <Grid item xs={6}>
          <InputDate
            required
            label="Tarixi"
            value={commandDate}
            onChange={(newValue) => setCommandDate(newValue)}
          />
        </Grid>
      </Grid>
    </Modal>
  );
};

export default CreateNewCommandModal;
