import { useParams } from "react-router-dom";
import { Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import API from "../../../../api";
import Button from "../../../Button/Button";
import InputDate from "../../../Input/InputDate";
import Modal from "../../Modal";

const CreateNewVacationModal = ({ open, onClose, getVacations }) => {
  const { employeeId } = useParams();

  const formik = useFormik({
    initialValues: {
      workYearInterval: "",
      main: "",
      addition: "",
      used: "",
      remainder: "",
    },
    onSubmit: (values) => {
      console.log(values);
      const { workYearInterval, main, addition, used, remainder } = values;

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
    },
  });

  return (
    <Modal
      title="Yeni məzuniyyət"
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
        <Grid item xs={6}>
          <InputDate
            required
            label="İş ili aralığı"
            name="workYearInterval"
            value={formik.values.workYearInterval}
            onChange={(newValue) =>
              formik.setFieldValue("workYearInterval", newValue)
            }
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            label="Əsas"
            name="main"
            value={formik.values.main}
            onChange={formik.handleChange}
          ></TextField>
        </Grid>

        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            label="Əlavə"
            name="addition"
            value={formik.values.addition}
            onChange={formik.handleChange}
          ></TextField>
        </Grid>

        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            label="İstifadə edilmiş"
            name="used"
            value={formik.values.used}
            onChange={formik.handleChange}
          ></TextField>
        </Grid>

        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            label="Qalıq"
            name="remainder"
            value={formik.values.remainder}
            onChange={formik.handleChange}
          ></TextField>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default CreateNewVacationModal;
