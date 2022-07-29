import { Box, Stack, Typography } from "@mui/material";
import RefreshButton from "../Button/RefreshButton";

const TableWrapper = ({ title, children, onRefreshData }) => {
  return (
    <Box border="1px solid #E0E0E0" borderRadius={1}>
      <Stack
        direction="row"
        sx={{
          bgcolor: "#F5F5F5",
          px: 2,
          py: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography fontWeight="500">{title}</Typography>

        <RefreshButton onRefreshData={onRefreshData} />
      </Stack>

      <Box p={2}>{children}</Box>
    </Box>
  );
};

export default TableWrapper;
