import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as SelectMui,
} from "@mui/material";

const Select = ({
  label,
  value,
  onChange,
  options,
  required,
  disabled,
  name,
}) => {
  return (
    <FormControl fullWidth required={required} disabled={disabled}>
      <InputLabel>{label}</InputLabel>

      <SelectMui
        label={label}
        fullWidth
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </SelectMui>
    </FormControl>
  );
};

export default Select;
