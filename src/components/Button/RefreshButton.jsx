import { useState } from "react";
import { IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

const RefreshButton = ({ onRefreshData }) => {
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  const handleRefresh = () => {
    onRefreshData();
    setIsAnimationActive(true);

    setTimeout(() => {
      setIsAnimationActive(false);
    }, 1000);
  };

  return (
    <IconButton
      onClick={handleRefresh}
      sx={{
        animation: isAnimationActive && "spin 1s ease",
        "@keyframes spin": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      }}
    >
      <RefreshIcon />
    </IconButton>
  );
};

export default RefreshButton;
