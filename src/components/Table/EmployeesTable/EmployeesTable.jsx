import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

const EmployeesTable = ({ headerData, bodyData, handleOpenArchiveModal }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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

  const handleShowEmployee = (id) => {
    navigate(`${id}/total`);
  };

  return (
    <Paper variant="outlined">
      <TableContainer component={Paper} elevation={0}>
        <Table aria-label="users table">
          <TableHeader headerData={headerData} additionalCell />

          <TableBody>
            {paginatedData.map((item) => {
              const keys = [
                "position",
                "department",
                "email",
                "corporateNumber",
              ];

              return (
                <TableRow key={item.id}>
                  <TableCell>
                    <AvatarContainer photo={item.photo} name={item.fullName} />
                  </TableCell>

                  {keys.map((key) => {
                    return <TableCell key={key}>{item[key] || "—"}</TableCell>;
                  })}

                  <TableCell>
                    <TableCellActions
                      onClickLeftButton={() => handleShowEmployee(item.id)}
                      iconShow
                    >
                      <MenuItem>Redaktə et</MenuItem>
                      <MenuItem onClick={() => handleOpenArchiveModal(item)}>
                        {item.isArchived ? "Arxivdən çıxar" : "Arxiv et"}
                      </MenuItem>
                    </TableCellActions>
                  </TableCell>
                </TableRow>
              );
            })}
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

export default EmployeesTable;
