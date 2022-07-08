import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Typography,
  Box,
  Collapse,
  Stack,
  Paper,
  Divider,
  Button as ButtonMui,
} from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import EditIcon from "@mui/icons-material/Edit";
import InputPassword from "../../../components/Input/InputPassword";
import Button from "../../../components/Button/Button";
import API from "../../../api";
import { useEffect } from "react";
import bcrypt from "bcryptjs";

const SecurityAndLogin = () => {
  const [isExpandedPasswordPanel, setIsExpandedPasswordPanel] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordRepeat, setNewPasswordRepeat] = useState("");
  const loggedUser = useSelector((state) => state.app.loggedUser);

  const [hashedUserPassword, setHashedUserPassword] = useState("");

  const handleToggleShowPanel = () => {
    setIsExpandedPasswordPanel((prevState) => !prevState);
  };

  const handleSavePassword = () => {
    const isCurrentPasswordValid = bcrypt.compareSync(
      currentPassword,
      hashedUserPassword
    );

    if (!isCurrentPasswordValid || newPassword !== newPasswordRepeat) {
      alert("Düzgün daxil etmədiniz");
      return;
    }

    console.log(currentPassword, newPassword, newPasswordRepeat);

    API.patch(`users/${loggedUser.id}`, {
      password: newPassword,
    }).then(() => {
      console.log("Password saved");
    });
  };

  const getUserPassword = async () => {
    const { data } = await API.get(`users/${loggedUser.id}`);
    setHashedUserPassword(data.password);
  };

  useEffect(() => {
    getUserPassword();
  }, []);

  return (
    <Paper variant="outlined">
      <ButtonMui
        onClick={handleToggleShowPanel}
        variant="outlined"
        fullWidth
        disableElevation
        disableRipple
        sx={{
          textAlign: "left",
          color: "inherit",
          textTransform: "none",
          px: 2,
          py: "11px",
          display: "flex",
          alignItems: "center",
          border: "none",
          bgcolor: isExpandedPasswordPanel ? "grey.100" : "transparent",
          "&:hover": {
            border: "none",
          },
        }}
      >
        <KeyIcon sx={{ mr: "12px" }} />

        <Box>
          <Typography>Şifrəni dəyişdir</Typography>
          <Typography>
            Başqa bir yerdə istifadə etmədiyin güclü bir şifrədən istifadə etmək
            yaxşı fikirdir
          </Typography>
        </Box>

        <EditIcon sx={{ ml: "auto" }} />
      </ButtonMui>

      {isExpandedPasswordPanel && <Divider />}

      <Collapse in={isExpandedPasswordPanel} timeout="auto" unmountOnExit>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            bgcolor: "grey.100",
            p: 2,
          }}
        >
          <Stack width="542px" spacing="12px">
            <InputPassword
              label="Cari şifrə"
              password={currentPassword}
              onChangePassword={(e) => setCurrentPassword(e.target.value)}
            />
            <InputPassword
              label="Yeni şifrə"
              password={newPassword}
              onChangePassword={(e) => setNewPassword(e.target.value)}
            />
            <InputPassword
              label="Yeni şifrənin təkrarı"
              password={newPasswordRepeat}
              onChangePassword={(e) => setNewPasswordRepeat(e.target.value)}
            />

            <Stack direction="row" spacing="12px">
              <Button primary onClick={handleSavePassword}>
                Yadda saxla
              </Button>
              <Button onClick={handleToggleShowPanel}>Bağla</Button>
            </Stack>
          </Stack>
        </Box>
      </Collapse>
    </Paper>
  );
};

export default SecurityAndLogin;
