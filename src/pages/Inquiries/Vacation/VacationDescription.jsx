import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Tabs from "../../../components/Tabs/Tabs";

const TABS = [
  { label: "Sorğunun formalaşdırılması", path: "" },
  { label: "Departament rəhbərin göndərməsi", path: "department-sending" },
  { label: "HR göndərməsi", path: "hr-sending" },
];

const VacationDescription = () => {
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

export default VacationDescription;
