import { useState } from "react";
import {
  Table,
  TableRow,
  TableCell,
  Paper,
  TableContainer,
  TableBody,
  Typography,
  TablePagination,
  MenuItem,
} from "@mui/material";
import AvatarContainer from "../../Avatar/AvatarContainer";
import TableCellActions from "../TableCellActions";
import TableHeader from "../TableHeader";

const UsersTable = ({
  headerData,
  bodyData,
  onOpenEditModal,
  onOpenUpdateModal,
  onDeactivateUser,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const paginatedData =
    rowsPerPage > 0
      ? bodyData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : bodyData;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper variant="outlined">
      <TableContainer component={Paper} elevation={0}>
        <Table aria-label="users table">
          <TableHeader headerData={headerData} additionalCell />

          <TableBody>
            {paginatedData.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "& td": { color: !item.isActive && "#BDBDBD" } }}
              >
                <TableCell>
                  <AvatarContainer photo={item.photo} name={item.fullName} />
                </TableCell>
                <TableCell>{item.userName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.position}</TableCell>
                <TableCell>{item.contactNumber}</TableCell>
                <TableCell>
                  <TableCellActions
                    onClickLeftButton={() => onOpenEditModal(item)}
                  >
                    <MenuItem onClick={() => onDeactivateUser(item)}>
                      {item.isActive ? "Deaktivləşdirin" : "Aktivləşdirin"}
                    </MenuItem>
                    <MenuItem onClick={() => onOpenUpdateModal(item)}>
                      Şifrəni yenilə
                    </MenuItem>
                  </TableCellActions>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {bodyData.length === 0 && (
          <Typography p={2} textAlign="center">
            Bu görüntüdə məlumat yoxdur.
          </Typography>
        )}
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={bodyData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default UsersTable;
