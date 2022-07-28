import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Button, Link, Stack, Typography } from "@mui/material";
import StringAvatar from "./StringAvatar";

const UserAvatar = () => {
  const fullName = useSelector((state) => state.app.loggedUser.fullName);

  return (
    <Stack
      direction="row"
      color="text.primary"
      ml="auto"
      display="flex"
      alignItems="center"
    >
      <Link
        component={RouterLink}
        to="/profile/account-settings"
        color="inherit"
        underline="none"
      >
        <Button
          variant="text"
          disableRipple
          sx={{ gap: 1, color: "inherit", textTransform: "none" }}
        >
          <StringAvatar string={fullName} />
          <Typography variant="subtitle2">{fullName}</Typography>
        </Button>
      </Link>
    </Stack>
  );
};

export default UserAvatar;
