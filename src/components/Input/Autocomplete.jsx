import { Autocomplete as AutocompleteMui, TextField } from "@mui/material";

const Autocomplete = ({
  label,
  value,
  options,
  onChange,
  required,
  disabled,
  name,
}) => {
  return (
    <AutocompleteMui
      multiple
      name={name}
      value={value}
      options={options}
      onChange={onChange}
      filterSelectedOptions
      disabled={disabled}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          required={required}
          inputProps={{
            ...params.inputProps,
            required: required && value.length === 0,
          }}
        />
      )}
    ></AutocompleteMui>
  );
};

export default Autocomplete;
