import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup as RadioGroupMui,
} from "@mui/material";

const RadioGroup = ({
  title,
  value,
  onChange,
  options,
  disabled,
  required,
  name,
}) => {
  return (
    <FormControl disabled={disabled} required={required} color="secondary">
      <FormLabel id={name}>{title}</FormLabel>
      <RadioGroupMui
        row
        aria-labelledby={name}
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            label={option.label}
            value={option.value}
            control={<Radio color="secondary" required={required} />}
          />
        ))}
      </RadioGroupMui>
    </FormControl>
  );
};

export default RadioGroup;
