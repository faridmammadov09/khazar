import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DownloadIcon from "@mui/icons-material/Download";

const FormWrapper = ({
  title,
  children,
  showEditButton,
  showInfoButton,
  showDownloadButton,
  onClickEdit,
  onClickInfo,
  onClickDownload,
}) => {
  return (
    <Paper variant="outlined">
      <Stack
        direction="row"
        sx={{
          bgcolor: "#F5F5F5",
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography fontWeight="500">{title}</Typography>

        <Stack direction="row" spacing="12px">
          {showEditButton && (
            <IconButton size="small" onClick={onClickEdit}>
              <EditIcon />
            </IconButton>
          )}

          {showInfoButton && (
            <IconButton size="small" onClick={onClickInfo}>
              <InfoOutlinedIcon />
            </IconButton>
          )}

          {showDownloadButton && (
            <IconButton size="small" onClick={onClickDownload}>
              <DownloadIcon />
            </IconButton>
          )}
        </Stack>
      </Stack>

      <Box p={2}>{children}</Box>
    </Paper>
  );
};

export default FormWrapper;
