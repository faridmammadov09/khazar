import { Paper, Stack } from "@mui/material";
import Button from "../Button/Button";

const SearchPanelContainer = ({ children, onSubmit, onClear }) => {
  return (
    <Paper
      variant="outlined"
      sx={{ mb: 2 }}
      component="form"
      onSubmit={onSubmit}
    >
      {children}

      <Stack
        direction="row"
        spacing="12px"
        justifyContent="flex-end"
        sx={{ borderTop: "1px solid #E0E0E0", px: 2, py: "12px" }}
      >
        <Button onClick={onClear}>Təmizlə</Button>
        <Button primary type="submit">
          Axtar
        </Button>
      </Stack>
    </Paper>
  );
};

export default SearchPanelContainer;
