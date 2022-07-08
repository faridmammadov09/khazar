import { Link } from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";
import ListItemButton from "../List/ListItemButton";

const NavLink = ({ link }) => {
  return (
    <Link component={RouterLink} to={link.to} color="inherit" underline="none">
      <ListItemButton link={link} />
    </Link>
  );
};

export default NavLink;
