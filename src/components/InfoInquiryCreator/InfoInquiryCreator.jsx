import { Box, Stack, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const InfoInquiryCreator = ({ name }) => {
  return (
    <Box sx={{ bgcolor: "#FAFAFA", p: 2, borderRadius: "4px" }}>
      <Stack direction="row" spacing={1}>
        <InfoIcon />
        <Typography>
          <b>Sorğunu yaradan şəxs:</b> {name}
        </Typography>
      </Stack>
    </Box>
  );
};

export default InfoInquiryCreator;
