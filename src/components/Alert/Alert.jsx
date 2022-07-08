import { Snackbar, Alert as AlertMui, IconButton } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import CloseIcon from "@mui/icons-material/Close";

const Alert = ({ open, onClose, severity, text }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <AlertMui
        icon={<WarningIcon fontSize="inherit" />}
        sx={{
          width: "360px",
          bgcolor: `${severity}.light`,
        }}
        severity={severity}
        variant="filled"
        action={
          <IconButton aria-label="close" color="inherit" onClick={onClose}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        {text}
      </AlertMui>
    </Snackbar>
  );
};

export default Alert;
