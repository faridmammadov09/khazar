import { useParams } from "react-router-dom";
import { Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
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

const CreateNewCommandModal = ({ open, onClose, onFetchEmployeeCommands }) => {
  const { employeeId } = useParams();

  const formik = useFormik({
    initialValues: {
      commandType: "",
      commandNumber: "",
      commandDate: "",
    },
    onSubmit: (values) => {
      const { commandType, commandNumber, commandDate } = values;

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
        formik.resetForm();
      });
    },
  });

  return (
    <Modal
      title="Yeni əmr"
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
          <Select
            required
            label="Tipi"
            name="commandType"
            value={formik.values.commandType}
            onChange={formik.handleChange}
            options={COMMAND_TYPES}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            type="number"
            label="Nömrəsi"
            name="commandNumber"
            value={formik.values.commandNumber}
            onChange={formik.handleChange}
          ></TextField>
        </Grid>

        <Grid item xs={6}>
          <InputDate
            required
            label="Tarixi"
            name="commandDate"
            value={formik.values.commandDate}
            onChange={(newValue) =>
              formik.setFieldValue("commandDate", newValue)
            }
          />
        </Grid>
      </Grid>
    </Modal>
  );
};

export default CreateNewCommandModal;
