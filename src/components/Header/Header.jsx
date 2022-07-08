import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  AppBar,
  Breadcrumbs,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import HeaderButtons from "./HeaderButtons";
import UserAvatar from "../Avatar/UserAvatar";
import {
  setShowCreateUserModal,
  setShowSearchUserPanel,
} from "../../features/user/userSlice";
import { setShowCreateRoleModal } from "../../features/role/roleSlice";
import { toggleEmployeeSearchPanel } from "../../features/employee/employeeSlice";
import {
  toggleShowDayOffSearchPanel,
  toggleShowNav,
} from "../../features/app/appSlice";

const Header = () => {
  const route = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenCreateModal = () => {
    switch (route.pathname) {
      case "/settings/users":
        dispatch(setShowCreateUserModal(true));
        break;
      case "/settings/user-roles":
        dispatch(setShowCreateRoleModal(true));
        break;
      case "/employees":
        navigate("/employees/new");
        break;
      case "/announcements":
        navigate("/announcements/new");
        break;
      case "/inquiries/day-off":
        navigate("/inquiries/day-off/new");
        break;
      case "/inquiries/business-trip":
        navigate("/inquiries/business-trip/new");
        break;
      case "/inquiries/vacation":
        navigate("/inquiries/vacation/new");
        break;
      case "/inquiries/guest":
        navigate("/inquiries/guest/new");
        break;
      case "/inquiries/it-supply":
        navigate("/inquiries/it-supply/new");
        break;
      case "/inquiries/purchasing":
        navigate("/inquiries/purchasing/new");
        break;
      default:
        break;
    }
  };

  const handleToggleSearchPanel = () => {
    switch (route.pathname) {
      case "/settings/users":
        dispatch(setShowSearchUserPanel(true));
        break;
      case "/employees":
        dispatch(toggleEmployeeSearchPanel());
        break;
      case "/inquiries/day-off":
        dispatch(toggleShowDayOffSearchPanel());
        break;
      default:
        break;
    }
  };

  const handleNavOpen = () => {
    dispatch(toggleShowNav());
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{ bgcolor: "#fff", borderBottom: "1px solid #E0E0E0" }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ color: "#424242" }}
            onClick={handleNavOpen}
          >
            <MenuIcon />
          </IconButton>

          <UserAvatar />
        </Toolbar>
      </AppBar>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ px: 3, py: 2, borderBottom: "1px solid #E0E0E0", mb: 1 }}
      >
        <Breadcrumbs>
          <Typography color="text.primary" variant="subtitle2">
            Əsas səhifə
          </Typography>
        </Breadcrumbs>

        <HeaderButtons
          onOpenCreateModal={handleOpenCreateModal}
          onToggleSearchPanel={handleToggleSearchPanel}
        />
      </Stack>
    </>
  );
};

export default Header;
