import { useParams } from "react-router-dom";
import { Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
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

  const formik = useFormik({
    initialValues: {
      contractDate: "",
      contractType: "",
      contractNumber: "",
      employmentRecordBookNumber: "",
      contractDuration: "",
    },
    onSubmit: (values) => {
      const {
        contractDate,
        contractType,
        contractNumber,
        employmentRecordBookNumber,
        contractDuration,
      } = values;

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
        formik.resetForm();
      });
    },
  });

  return (
    <Modal
      title="Yeni müqavilə"
      open={open}
      onClose={onClose}
      onSubmit={formik.handleSubmit}
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
            name="contractDate"
            value={formik.values.contractDate}
            onChange={(newValue) =>
              formik.setFieldValue("contractDate", newValue)
            }
          />
        </Grid>

        <Grid item xs={6}>
          <Select
            required
            label="Növü"
            name="contractType"
            value={formik.values.contractType}
            onChange={formik.handleChange}
            options={["Əmək", "Type 1", "Type 2", "Type 3"]}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            type="number"
            label="Nömrəsi"
            name="contractNumber"
            value={formik.values.contractNumber}
            onChange={formik.handleChange}
          ></TextField>
        </Grid>

        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            type="number"
            label="Əmək kitabçasının nömrəsi"
            name="employmentRecordBookNumber"
            value={formik.values.employmentRecordBookNumber}
            onChange={formik.handleChange}
          ></TextField>
        </Grid>

        <Grid item xs={6}>
          <RadioGroup
            required
            title="Müddəti"
            name="contractDuration"
            value={formik.values.contractDuration}
            onChange={formik.handleChange}
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

export default CreateNewContractModal;
