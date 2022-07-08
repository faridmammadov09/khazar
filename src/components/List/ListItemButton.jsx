import {
  ListItemButton as ListItemButtonMui,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ListItemButton = ({ link, onClick }) => {
  return (
    <ListItemButtonMui
      disableRipple
      sx={{ borderRadius: "4px" }}
      onClick={onClick}
    >
      <ListItemIcon sx={{ color: "inherit" }}>{link.icon}</ListItemIcon>
      <ListItemText primary={link.text} />

      {link.isCollapsible && link.isExpanded && <ExpandLessIcon />}
      {link.isCollapsible && !link.isExpanded && <ExpandMoreIcon />}
    </ListItemButtonMui>
  );
};

export default ListItemButton;
