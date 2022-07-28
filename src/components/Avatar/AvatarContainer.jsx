import { Avatar, Stack, Typography } from "@mui/material";

const AvatarContainer = ({ photo, name }) => {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Avatar src={photo} sx={{ height: "28px", width: "28px" }}></Avatar>

      <Typography variant="body2">{name}</Typography>
    </Stack>
  );
};

export default AvatarContainer;
