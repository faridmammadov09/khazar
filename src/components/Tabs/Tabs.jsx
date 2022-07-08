import { Box, Tabs as TabsMui, Tab } from "@mui/material";
import { Link } from "react-router-dom";

const Tabs = ({ tabs, currentTab, onChangeCurrentTab }) => {
  return (
    <Box sx={{ mx: -2, my: -1 }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          bgcolor: "#F5F5F5",
        }}
      >
        <TabsMui
          value={currentTab}
          onChange={onChangeCurrentTab}
          aria-label="tabs"
          textColor="secondary"
          indicatorColor="secondary"
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              to={tab.path}
              value={tab.path}
              sx={{ textTransform: "none" }}
              component={Link}
            ></Tab>
          ))}
        </TabsMui>
      </Box>
    </Box>
  );
};

export default Tabs;
