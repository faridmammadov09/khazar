import {
  Box,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";

import { NavLink as RouterLink, Outlet } from "react-router-dom";

import SettingsIcon from "@mui/icons-material/Settings";
import SecurityIcon from "@mui/icons-material/Security";

const activeStyle = {
  backgroundColor: "#F3EBFB",
  color: "#9B5AE1",
};

const Profile = () => {
  return (
    <Box display="flex">
      <Box
        width="274px"
        borderRight="1px solid #E0E0E0"
        sx={{ height: "calc(100vh - 134.5px)" }}
        pt={2}
        pr={2}
        mt={-1}
      >
        <List disablePadding>
          <Stack spacing={1}>
            <Link
              component={RouterLink}
              to="account-settings"
              color="inherit"
              underline="none"
              borderRadius="4px"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <ListItemButton disableRipple>
                <ListItemIcon sx={{ color: "inherit" }}>
                  <SettingsIcon />
                </ListItemIcon>

                <ListItemText primary="Hesab parametrləri" />
              </ListItemButton>
            </Link>
            <Link
              component={RouterLink}
              to="security-and-login"
              color="inherit"
              underline="none"
              borderRadius="4px"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <ListItemButton disableRipple>
                <ListItemIcon sx={{ color: "inherit" }}>
                  <SecurityIcon />
                </ListItemIcon>

                <ListItemText primary="Təhlükəsizlik və Giriş" />
              </ListItemButton>
            </Link>
          </Stack>
        </List>
      </Box>

      <Box flex={1} p={2} mt={-2}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Profile;
