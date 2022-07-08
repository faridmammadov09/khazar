import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Grid } from "@mui/material";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";

const Layout = () => {
  const { isShowNav } = useSelector((state) => state.app);

  return (
    <Grid container height="100vh">
      {isShowNav && (
        <Grid item width="240px">
          <Nav />
        </Grid>
      )}
      <Grid item flex="1">
        <Header />

        <Box component="main" spacing={1} px={2}>
          <Outlet />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Layout;
