import { Button as ButtonMui } from "@mui/material";

const primaryButtonStyle = {
  textTransform: "none",
  bgcolor: "secondary.main",
  color: "#fff",
  "&:hover": {
    bgcolor: "secondary.dark",
  },
};

const secondaryButtonStyle = {
  textTransform: "none",
  bgcolor: "grey.100",
  color: "inherit",
  "&:hover": {
    bgcolor: "grey.200",
  },
};

const Button = ({ type, onClick, children, primary, variant, startIcon }) => {
  return (
    <ButtonMui
      type={type}
      onClick={onClick}
      variant={variant}
      startIcon={startIcon}
      sx={primary ? primaryButtonStyle : secondaryButtonStyle}
      disableElevation
      disableRipple
    >
      {children}
    </ButtonMui>
  );
};

export default Button;
