import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup as RadioGroupMui,
} from "@mui/material";

const RadioGroup = ({
  id,
  title,
  value,
  onChange,
  options,
  disabled,
  required,
}) => {
  return (
    <FormControl disabled={disabled} required={required} color="secondary">
      <FormLabel id={`${id}-radio-buttons-group-label`}>{title}</FormLabel>
      <RadioGroupMui
        row
        aria-labelledby={`${id}-radio-buttons-group-label`}
        name={`${id}-radio-buttons-group`}
        value={value}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            label={option.label}
            value={option.value}
            control={<Radio color="secondary" required />}
          />
        ))}
      </RadioGroupMui>
    </FormControl>
  );
};

export default RadioGroup;
