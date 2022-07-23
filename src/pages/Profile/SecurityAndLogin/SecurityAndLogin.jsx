import { useState, useEffect } from "react";
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
import bcrypt from "bcryptjs";
import { useFormik } from "formik";
import API from "../../../api";
import InputPassword from "../../../components/Input/InputPassword";
import Button from "../../../components/Button/Button";

const SecurityAndLogin = () => {
  const [isExpandedPasswordPanel, setIsExpandedPasswordPanel] = useState(false);
  const [hashedUserPassword, setHashedUserPassword] = useState("");

  const loggedUser = useSelector((state) => state.app.loggedUser);

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      newPasswordRepeat: "",
    },
    onSubmit: (values) => {
      const { currentPassword, newPassword, newPasswordRepeat } = values;

      const isCurrentPasswordValid = bcrypt.compareSync(
        currentPassword,
        hashedUserPassword
      );

      if (!isCurrentPasswordValid || newPassword !== newPasswordRepeat) {
        alert("Düzgün daxil etmədiniz");
        return;
      }

      console.log(values);

      API.patch(`users/${loggedUser.id}`, {
        password: newPassword,
      }).then(() => {
        console.log("Password saved");
      });
    },
  });

  const handleToggleShowPanel = () => {
    setIsExpandedPasswordPanel((prevState) => !prevState);
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
          <Stack
            width="542px"
            spacing="12px"
            component="form"
            onSubmit={formik.handleSubmit}
          >
            <InputPassword
              label="Cari şifrə"
              name="currentPassword"
              value={formik.values.currentPassword}
              onChange={formik.handleChange}
            />
            <InputPassword
              label="Yeni şifrə"
              name="newPassword"
              value={formik.values.newPassword}
              onChange={formik.handleChange}
            />
            <InputPassword
              label="Yeni şifrənin təkrarı"
              name="newPasswordRepeat"
              value={formik.values.newPasswordRepeat}
              onChange={formik.handleChange}
            />

            <Stack direction="row" spacing="12px">
              <Button type="submit" primary>
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
