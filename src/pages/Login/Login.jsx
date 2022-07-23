import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Stack, Box, Grid } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import logo from "../../assets/logo-xezertv.svg";
import { setLoggedUser, setToken } from "../../features/app/appSlice";
import InputPassword from "../../components/Input/InputPassword";
import Button from "../../components/Button/Button";
import Alert from "../../components/Alert/Alert";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isShowAlert, setIsShowAlert] = useState(false);
  // const [error, setError] = useState({ userName: false, password: false });

  const loggedUser = useSelector((state) => state.app.loggedUser);

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      const { userName, password } = values;

      axios
        .post("http://localhost:4000/login", {
          email: userName,
          password,
        })
        .then((res) => {
          const { user, accessToken } = res.data;

          dispatch(setLoggedUser(user));
          dispatch(setToken(accessToken));
          navigate("/", { replace: true });
        })
        .catch((err) => {
          if (err) {
            setIsShowAlert(true);
            // setError({ userName: true, password: true });
          }
        });
    },
  });

  useEffect(() => {
    if (loggedUser.fullName) {
      navigate("/");
    }
  }, []);

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsShowAlert(false);
  };

  // useEffect(() => {
  //   setError((state) => {
  //     return { ...state, userName: false };
  //   });
  // }, [userName]);

  // useEffect(() => {
  //   setError((state) => {
  //     return { ...state, password: false };
  //   });
  // }, [password]);

  return (
    <>
      <Alert
        open={isShowAlert}
        onClose={handleCloseAlert}
        severity="error"
        text="İstifadəçi adı və ya şifrə yanlış daxil edilib"
      />

      <Box
        sx={{
          height: "100vh",
          backgroundColor: "#eee",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            borderRadius: "12px",
            overflow: "hidden",
            minHeight: "420px",
            width: "884px",
            bgcolor: "#fff",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#9b5ae1",
              py: 10,
            }}
          >
            <img src={logo} alt="" />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              padding: "60px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Stack spacing={2} component="form" onSubmit={formik.handleSubmit}>
              <TextField
                label="İstifadəçi adı"
                name="userName"
                value={formik.values.userName}
                onChange={formik.handleChange}
                // error={error.userName}
              ></TextField>

              <InputPassword
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                // error={error.password}
              />

              <Button type="submit" primary>
                Daxil ol
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
