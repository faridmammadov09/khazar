import { Avatar, Grid, Typography } from "@mui/material";

const EmployeeInfoItem = ({ title, data }) => {
  return (
    <>
      <Grid
        item
        xs={4}
        sx={{
          py: 2,
          borderBottom: "1px solid",
          borderColor: "divider",
          color: "#9E9E9E",
        }}
      >
        <Typography variant="subtitle2">{title}</Typography>
      </Grid>
      <Grid
        item
        xs={8}
        sx={{
          py: 2,
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        {title === "Foto şəkil" ? (
          <Avatar src={data} sx={{ width: 160, height: 160 }}></Avatar>
        ) : (
          <Typography variant="subtitle2">{data}</Typography>
        )}
      </Grid>
    </>
  );
};

export default EmployeeInfoItem;
