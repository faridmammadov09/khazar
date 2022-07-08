import { TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const InputDate = ({ label, value, onChange, required, disabled }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        disabled={disabled}
        label={label}
        value={value}
        onChange={onChange}
        renderInput={(params) => (
          <TextField fullWidth {...params} required={required} error={false} />
        )}
        InputAdornmentProps={{ position: "start" }}
      />
    </LocalizationProvider>
  );
};

export default InputDate;
