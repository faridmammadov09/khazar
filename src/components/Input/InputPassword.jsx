import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

const InputPassword = ({
  label,
  password,
  onChangePassword,
  error,
  fullWidth,
  required,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      label={label || "Şifrə"}
      type={showPassword ? "text" : "password"}
      value={password}
      onChange={onChangePassword}
      error={error}
      fullWidth={fullWidth}
      required={required}
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
