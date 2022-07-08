import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Tabs from "../../../components/Tabs/Tabs";

const TABS = [
  { label: "Sorğunun formalaşdırılması", path: "" },
  { label: "Departament rəhbərin göndərməsi", path: "department-sending" },
  { label: "NBM rəisin göndərməsi", path: "nbm-chief-sending" },
  { label: "NBM əməkdaşın göndərməsi", path: "nbm-employee-sending" },
];

const GuestDescription = () => {
  const [currentTab, setCurrentTab] = useState("");

  return (
    <>
      <Box sx={{ mb: 3 }}>
        <Tabs
          tabs={TABS}
          currentTab={currentTab}
          onChangeCurrentTab={(event, newValue) => setCurrentTab(newValue)}
        />
      </Box>

      <Outlet />
    </>
  );
};

export default GuestDescription;
