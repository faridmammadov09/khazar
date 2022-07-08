import { useSelector } from "react-redux";
import { Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Button from "../../Button/Button";

const TableTop = ({ title, onClickAdd }) => {
  const loggedUser = useSelector((state) => state.app.loggedUser);

  return (
    <Stack
      direction="row"
      sx={{
        bgcolor: "#F5F5F5",
        px: 2,
        py: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography fontWeight="500">{title}</Typography>

      {loggedUser.roles.includes("Admin") && (
        <Button startIcon={<AddIcon />} primary onClick={onClickAdd}>
          Əlavə et
        </Button>
      )}
    </Stack>
  );
};

export default TableTop;
