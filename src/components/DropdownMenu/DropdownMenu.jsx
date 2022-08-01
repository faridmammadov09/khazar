import { Menu } from "@mui/material";

const DropdownMenu = ({ children, anchorEl, open, onClose }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      onClick={onClose}
      id="dropdown-menu"
      MenuListProps={{
        "aria-labelledby": "more-button",
      }}
      elevation={1}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {children}
    </Menu>
  );
};

export default DropdownMenu;
