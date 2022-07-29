import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Button from "../Button/Button";

const paths = [
  "profile",
  "employees/",
  "announcements/",
  "inquiries/day-off/",
  "inquiries/business-trip/",
  "inquiries/vacation/",
  "inquiries/guest/",
  "inquiries/it-supply/",
  "inquiries/purchasing/",
];

const HeaderButtons = ({ onOpenCreateModal, onToggleSearchPanel }) => {
  const location = useLocation();
  const { loggedUser } = useSelector((state) => state.app);

  for (let path of paths) {
    if (location.pathname.includes(path) || location.pathname === "/") return;
  }

  return (
    <Stack direction="row" spacing={1}>
      {location.pathname !== "/announcements" && (
        <Button startIcon={<SearchIcon />} onClick={onToggleSearchPanel}>
          Axtarış
        </Button>
      )}

      {loggedUser.roles.includes("Admin") && (
        <Button primary startIcon={<AddIcon />} onClick={onOpenCreateModal}>
          Əlavə et
        </Button>
      )}
    </Stack>
  );
};

export default HeaderButtons;
