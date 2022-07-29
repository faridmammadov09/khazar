import { Grid, ListItem as ListItemMui, ListItemText } from "@mui/material";

const formatDate = (date) => new Date(date).toLocaleDateString();

const ListItem = ({ item, divider }) => {
  return (
    <ListItemMui disableGutters divider={divider}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ListItemText sx={{ color: "#9E9E9E" }}>{item.title}</ListItemText>
        </Grid>

        <Grid item xs>
          <ListItemText>
            {item.title === '"Xəzər TV" MMC-də olan iş stajı'
              ? formatDate(item.value)
              : item.value}
          </ListItemText>
        </Grid>
      </Grid>
    </ListItemMui>
  );
};

export default ListItem;
