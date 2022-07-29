import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Tabs from "../../components/Tabs/Tabs";

const TABS = [
  {
    label: "Ümumi",
    path: "total",
  },
  {
    label: "Müqavilə",
    path: "contract",
  },
  {
    label: "Əmr",
    path: "command",
  },
  {
    label: "Staj/Əmək haqqı",
    path: "salary",
  },
  {
    label: "Əmək məzuniyyəti",
    path: "vacation",
  },
  {
    label: "Sənədlər",
    path: "documents",
  },
];

const Employee = () => {
  const [currentTab, setCurrentTab] = useState("total");

  const handleChangeCurrentTab = (event, newValue) => {
    setCurrentTab(newValue);
  };

  // useEffect(() => {
  //   const hashIndex = location.pathname.lastIndexOf("/");
  //   const current = location.pathname.slice(hashIndex + 1);
  //   setCurrentTab(current);
  // }, []);

  return (
    <div>
      <Tabs
        tabs={TABS}
        currentTab={currentTab}
        onChangeCurrentTab={handleChangeCurrentTab}
      />

      <Box py={3}>
        <Outlet />
      </Box>
    </div>
  );
};

export default Employee;
