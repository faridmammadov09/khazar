import { useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { Box, Collapse, Drawer, List } from "@mui/material";
import logo from "../../assets/logo-xezertv.svg";
import "./Nav.css";
import NavLink from "./NavLink";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import CampaignIcon from "@mui/icons-material/Campaign";
import SettingsIcon from "@mui/icons-material/Settings";
import ListItemButton from "../List/ListItemButton";

const Nav = () => {
  const [openInquiries, setOpenInquiries] = useState(false);
  const [openAnnouncements, setOpenAnnouncements] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  const handleToggleInquiries = () => {
    setOpenInquiries((prevState) => !prevState);
  };

  const handleToggleAnnouncements = () => {
    setOpenAnnouncements((prevState) => !prevState);
  };

  const handleToggleSettings = () => {
    setOpenSettings((prevState) => !prevState);
  };

  const links = [
    { id: 1, to: "/", icon: <DashboardIcon />, text: "Əsas səhifə" },
    { id: 2, to: "/employees", icon: <GroupIcon />, text: "Əməkdaşlar" },
    {
      id: 3,
      icon: <TextSnippetIcon />,
      text: "Sorğular",
      isCollapsible: true,
      isExpanded: openInquiries,
      handleFunction: handleToggleInquiries,
      children: [
        { id: 1, to: "inquiries/day-off", text: "Day off" },
        { id: 2, to: "inquiries/business-trip", text: "Ezamiyyət" },
        { id: 3, to: "inquiries/vacation", text: "Məzuniyyət" },
        { id: 4, to: "inquiries/guest", text: "Qonaq" },
        { id: 5, to: "inquiries/it-supply", text: "IT təchizat" },
        { id: 6, to: "inquiries/purchasing", text: "Satınalma" },
      ],
    },
    {
      id: 4,
      icon: <CampaignIcon />,
      text: "Elanlar",
      isCollapsible: true,
      isExpanded: openAnnouncements,
      handleFunction: handleToggleAnnouncements,
      children: [{ id: 1, to: "/announcements", text: "Elan" }],
    },
    {
      id: 5,
      icon: <SettingsIcon />,
      text: "Parametrlər",
      isCollapsible: true,
      isExpanded: openSettings,
      handleFunction: handleToggleSettings,
      children: [
        { id: 1, to: "/settings/users", text: "İstifadəçilər" },
        { id: 2, to: "/settings/user-roles", text: "İstifadəçi rolları" },
      ],
    },
  ];

  return (
    <Drawer
      className="nav"
      variant="permanent"
      anchor="left"
      sx={{
        "& .MuiDrawer-paper": {
          width: "240px",
          boxSizing: "border-box",
          backgroundColor: "secondary.main",
          px: 1,
        },
      }}
    >
      <Box p={2} pb="12px">
        <RouterLink to="/">
          <img src={logo} alt="logo" width={106} />
        </RouterLink>
      </Box>

      <List sx={{ color: "#fff" }} component="nav" aria-labelledby="nav-list">
        {links.map((link) => {
          if (link.isCollapsible) {
            return (
              <div key={link.id}>
                <ListItemButton
                  link={link}
                  onClick={link.handleFunction}
                ></ListItemButton>
                <Collapse in={link.isExpanded} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {link.children.map((child) => {
                      return <NavLink key={child.id} link={child}></NavLink>;
                    })}
                  </List>
                </Collapse>
              </div>
            );
          }

          return <NavLink key={link.id} link={link} />;
        })}
      </List>
    </Drawer>
  );
};

export default Nav;
