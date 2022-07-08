import { Paper, List as ListMui } from "@mui/material";
import ListItem from "./ListItem";

const List = ({ data }) => {
  return (
    <Paper variant="outlined">
      <ListMui disablePadding sx={{ px: 2 }}>
        {data.map((item, index) => (
          <ListItem
            item={item}
            key={index}
            divider={index !== data.length - 1}
          />
        ))}
      </ListMui>
    </Paper>
  );
};

export default List;
