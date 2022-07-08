import { useDispatch, useSelector } from "react-redux";
import { Box, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import StringAvatar from "../../../components/Avatar/StringAvatar";
import Button from "../../../components/Button/Button";
import { logout } from "../../../features/app/appSlice";

const user = {
  fullName: "Xəyalə Aslanova Əliağa",
  position: "Aparıcı",
  userName: "xeyalea",
  email: "xeyalea@xezertv.az",
  contactNumber: "994505005050",
  roles: ["Admin", "Reporter"],
};

const AccountSettings = () => {
  const loggedUser = useSelector((state) => state.app.loggedUser);
  const dispatch = useDispatch();

  return (
    <Grid container spacing={2} height="195px">
      <Grid item xs={12} lg={4}>
        <Paper
          variant="outlined"
          sx={{
            height: "100%",
            // width: "252px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          <StringAvatar
            string={loggedUser.fullName}
            height="64px"
            width="64px"
          />
          <Typography mt={1} mb="2px">
            {loggedUser.fullName}
          </Typography>
          <Typography variant="body2">{loggedUser.position}</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} lg={8}>
        <Paper variant="outlined" sx={{ height: "100%", px: 2 }}>
          <Stack direction="row" py={2}>
            <Typography variant="subtitle2" width="200px">
              İstifadəçi adı
            </Typography>
            <Typography>{loggedUser.userName}</Typography>
          </Stack>
          <Divider />
          <Stack direction="row" py={2}>
            <Typography variant="subtitle2" width="200px">
              Elektron poçt
            </Typography>
            <Typography>{loggedUser.email}</Typography>
          </Stack>
          <Divider />
          <Stack direction="row" py={2}>
            <Typography variant="subtitle2" width="200px">
              Əlaqə nömrəsi
            </Typography>
            <Typography>{loggedUser.contactNumber}</Typography>
          </Stack>
          <Divider />
          <Stack direction="row" py={2}>
            <Typography variant="subtitle2" width="200px">
              İstifadəçi rolları
            </Typography>
            <Typography>{loggedUser.roles.join(", ")}</Typography>
          </Stack>
        </Paper>
      </Grid>

      <Box m={2}>
        <Button onClick={() => dispatch(logout())}>Logout</Button>
      </Box>
    </Grid>
  );
};

export default AccountSettings;
