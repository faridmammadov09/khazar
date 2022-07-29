import { useDispatch, useSelector } from "react-redux";
import { Box, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import { logout } from "../../../features/app/appSlice";
import StringAvatar from "../../../components/Avatar/StringAvatar";
import Button from "../../../components/Button/Button";

const AccountSettings = () => {
  const loggedUser = useSelector((state) => state.app.loggedUser);
  const dispatch = useDispatch();

  const LIST_DATA = [
    { id: 1, title: "İstifadəçi adı", value: loggedUser.userName },
    { id: 2, title: "Elektron poçt", value: loggedUser.email },
    { id: 3, title: "Əlaqə nömrəsi", value: loggedUser.contactNumber },
    { id: 4, title: "İstifadəçi rolları", value: loggedUser.roles.join(", ") },
  ];

  return (
    <Grid container spacing={2} height="195px">
      <Grid item xs={12} lg={4}>
        <Paper
          variant="outlined"
          sx={{
            height: "100%",
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
          {LIST_DATA.map((item, index) => {
            return (
              <div key={item.id}>
                <Stack direction="row" py={2}>
                  <Typography variant="subtitle2" width="200px">
                    {item.title}
                  </Typography>
                  <Typography>{item.value}</Typography>
                </Stack>
                {index + 1 !== LIST_DATA.length && <Divider />}
              </div>
            );
          })}
        </Paper>
      </Grid>

      <Box m={2}>
        <Button onClick={() => dispatch(logout())}>Logout</Button>
      </Box>
    </Grid>
  );
};

export default AccountSettings;
