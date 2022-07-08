import { useState } from "react";
import { IconButton, Stack } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VisibilityIcon from "@mui/icons-material/Visibility";

import DropdownMenu from "../DropdownMenu/DropdownMenu";

const TableCellActions = ({
  onClickLeftButton,
  children,
  iconShow,
  dropdownHidden,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpenDropdownMore = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseDropdownMore = () => {
    setAnchorEl(null);
  };

  return (
    <Stack direction="row" justifyContent="flex-end" spacing={1}>
      <IconButton size="small" onClick={onClickLeftButton}>
        {iconShow ? (
          <VisibilityIcon fontSize="inherit" />
        ) : (
          <EditIcon fontSize="inherit" />
        )}
      </IconButton>

      {!dropdownHidden && (
        <IconButton
          size="small"
          id="more-button"
          aria-haspopup="true"
          onClick={handleOpenDropdownMore}
        >
          <MoreHorizIcon fontSize="inherit" />
        </IconButton>
      )}

      <DropdownMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseDropdownMore}
      >
        {children}
      </DropdownMenu>
    </Stack>
  );
};

export default TableCellActions;
