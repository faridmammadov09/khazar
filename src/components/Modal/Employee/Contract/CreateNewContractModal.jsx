import { useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, TextField } from "@mui/material";
import API from "../../../../api";
import InputDate from "../../../Input/InputDate";
import RadioGroup from "../../../RadioGroup/RadioGroup";
import Select from "../../../Select/Select";
import Modal from "../../Modal";
import Button from "../../../Button/Button";

const CreateNewContractModal = ({
  open,
  onClose,
  onFetchEmployeeContracts,
}) => {
  const { employeeId } = useParams();
  const [contractDate, setContractDate] = useState("");
  const [contractType, setContractType] = useState("");
  const [contractNumber, setContractNumber] = useState("");
  const [employmentRecordBookNumber, setEmploymentRecordBookNumber] =
    useState("");
  const [contractDuration, setContractDuration] = useState("");

  const clearInputs = () => {
    setContractDate("");
    setContractType("");
    setContractNumber("");
    setEmploymentRecordBookNumber("");
    setContractDuration("");
  };

  const handleCreateNewContract = (e) => {
    e.preventDefault();

    const newContract = {
      conclusionDate: contractDate,
      expirationDate: contractDate,
      type: contractType,
      number: contractNumber,
      employmentRecordBookNumber,
      duration: contractDuration,
      employeeId: +employeeId,
    };

    API.post("contracts", newContract).then(() => {
      onFetchEmployeeContracts();
      onClose();
      clearInputs();
    });
  };

  return (
    <Modal
      title="Yeni müqavilə"
      open={open}
      onClose={onClose}
      onSubmit={handleCreateNewContract}
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
          <InputDate
            required
            label="Tarixi"
            value={contractDate}
            onChange={(newValue) => setContractDate(newValue)}
          />
        </Grid>

        <Grid item xs={6}>
          <Select
            label="Növü"
            value={contractType}
            onChange={(value) => setContractType(value)}
            options={["Əmək", "Type 1", "Type 2", "Type 3"]}
            required
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            type="number"
            label="Nömrəsi"
            required
            fullWidth
            value={contractNumber}
            onChange={(e) => setContractNumber(e.target.value)}
          ></TextField>
        </Grid>

        <Grid item xs={6}>
          <TextField
            type="number"
            label="Əmək kitabçasının nömrəsi"
            required
            fullWidth
            value={employmentRecordBookNumber}
            onChange={(e) => setEmploymentRecordBookNumber(e.target.value)}
          ></TextField>
        </Grid>

        <Grid item xs={6}>
          <RadioGroup
            id="contract-duration"
            title="Müddəti"
            value={contractDuration}
            onChange={(e) => setContractDuration(e.target.value)}
            options={[
              { value: "Müddətli", label: "Müddətli" },
              { value: "Müddətsiz", label: "Müddətsiz" },
            ]}
            required
          />
        </Grid>
      </Grid>
    </Modal>
  );
};

export default CreateNewContractModal;
