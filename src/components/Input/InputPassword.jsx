import { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const InputPassword = ({
  label,
  value,
  onChange,
  onBlur,
  error,
  fullWidth,
  required,
  name,
  helperText,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      name={name}
      label={label || "Şifrə"}
      type={showPassword ? "text" : "password"}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      fullWidth={fullWidth}
      required={required}
      helperText={helperText}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              edge="end"
              onClick={() => setShowPassword((prevState) => !prevState)}
              sx={{
                color: error ? "error.dark" : "grey.600",
              }}
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    ></TextField>
  );
};

export default InputPassword;
