import { useEffect, useState } from "react";
import { Grid, TextField } from "@mui/material";
import API from "../../../../api";
import InputDate from "../../../Input/InputDate";
import RadioGroup from "../../../RadioGroup/RadioGroup";
import Select from "../../../Select/Select";
import Modal from "../../Modal";
import Button from "../../../Button/Button";

const EditContractModal = ({
  open,
  onClose,
  onFetchEmployeeContracts,
  contract,
}) => {
  const [contractDate, setContractDate] = useState("");
  const [contractType, setContractType] = useState("");
  const [contractNumber, setContractNumber] = useState("");
  const [employmentRecordBookNumber, setEmploymentRecordBookNumber] =
    useState("");
  const [contractDuration, setContractDuration] = useState("");

  const fillInputs = ({
    conclusionDate,
    type,
    number,
    employmentRecordBookNumber,
    duration,
  }) => {
    setContractDate(conclusionDate);
    setContractType(type);
    setContractNumber(number);
    setEmploymentRecordBookNumber(employmentRecordBookNumber);
    setContractDuration(duration);
  };

  const handleEditContract = (e) => {
    e.preventDefault();

    API.patch(`contracts/${contract.id}`, {
      conclusionDate: contractDate,
      expirationDate: contractDate,
      type: contractType,
      number: contractNumber,
      employmentRecordBookNumber,
      duration: contractDuration,
    }).then(() => {
      onFetchEmployeeContracts();
      onClose();
    });
  };

  useEffect(() => {
    if (Object.keys(contract).length !== 0) {
      fillInputs(contract);
    }
  }, [contract]);

  return (
    <Modal
      title="Müqavilənin redaktəsi"
      open={open}
      onClose={onClose}
      onSubmit={handleEditContract}
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
          />
        </Grid>
      </Grid>
    </Modal>
  );
};

export default EditContractModal;
