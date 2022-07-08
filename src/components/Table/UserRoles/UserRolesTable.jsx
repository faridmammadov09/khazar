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
import TableCellActions from "../TableCellActions";
import TableHeader from "../TableHeader";

const UserRolesTable = ({
  headerData,
  bodyData,
  onOpenEditModal,
  onOpenDeleteModal,
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
        <Table aria-label="user roles table">
          <TableHeader headerData={headerData} additionalCell />

          <TableBody>
            {paginatedData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.isStatic ? "Hə" : "Yox"}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>
                  <TableCellActions
                    onClickLeftButton={() => onOpenEditModal(item)}
                  >
                    <MenuItem onClick={() => onOpenDeleteModal(item)}>
                      Rolu sil
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

export default UserRolesTable;
