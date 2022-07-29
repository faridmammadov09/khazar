import { useState, useEffect } from "react";
import { Grid, TextField } from "@mui/material";
import API from "../../../../api";
import Button from "../../../Button/Button";
import InputDate from "../../../Input/InputDate";
import Select from "../../../Select/Select";
import Modal from "../../Modal";

const COMMAND_TYPES = [
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

const EditCommandModal = ({
  open,
  onClose,
  onFetchEmployeeCommands,
  command,
}) => {
  const [commandType, setCommandType] = useState("");
  const [commandNumber, setCommandNumber] = useState("");
  const [commandDate, setCommandDate] = useState("");

  const fillInputs = ({ type, number, date }) => {
    setCommandType(type);
    setCommandNumber(number);
    setCommandDate(date);
  };

  const handleEditCommand = (e) => {
    e.preventDefault();

    API.patch(`commands/${command.id}`, {
      type: commandType,
      number: commandNumber,
      date: commandDate,
    }).then(() => {
      onFetchEmployeeCommands();
      onClose();
    });
  };

  useEffect(() => {
    if (Object.keys(command).length !== 0) {
      fillInputs(command);
    }
  }, [command]);

  return (
    <Modal
      title="Əmrin redaktəsi"
      open={open}
      onClose={onClose}
      onSubmit={handleEditCommand}
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
        <Grid item xs={12}>
          <Select
            required
            label="Tipi"
            value={commandType}
            onChange={(value) => setCommandType(value)}
            options={COMMAND_TYPES}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            label="Nömrəsi"
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

export default EditCommandModal;
