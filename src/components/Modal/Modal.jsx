import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const Modal = ({ title, children, open, onClose, actionButtons, onSubmit }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      fullWidth
    >
      <DialogTitle id="dialog-title">{title}</DialogTitle>

      <form onSubmit={onSubmit}>
        <DialogContent dividers>{children}</DialogContent>

        <DialogActions>{actionButtons}</DialogActions>
      </form>
    </Dialog>
  );
};

export default Modal;
