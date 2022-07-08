import { useState } from "react";
import {
  Chip,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import TableCellActions from "../TableCellActions";
import TableHeader from "../TableHeader";
import TableTop from "../TableTop/TableTop";

const EmployeeTable = ({
  title,
  headerData,
  bodyData,
  onClickAdd,
  onOpenEditModal,
  onDeleteModal,
  dropdownHidden,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper variant="outlined">
      <TableTop title={title} onClickAdd={onClickAdd} />

      <Table
        aria-label="table"
        sx={{ borderBottom: "1px solid", borderColor: "divider" }}
      >
        <TableHeader headerData={headerData} additionalCell />

        <TableBody>
          {bodyData.map((item) => (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              key={item.id}
            >
              {Object.keys(item).map((key, index) => {
                if (
                  key === "id" ||
                  key === "employeeId" ||
                  key === "uploadDocument"
                ) {
                  return;
                }

                if (key === "name") {
                  return (
                    <TableCell key={index}>
                      <Chip label={item[key]} size="small" />
                    </TableCell>
                  );
                }

                if (
                  key === "conclusionDate" ||
                  key === "expirationDate" ||
                  key === "date" ||
                  key === "yearOfWork"
                ) {
                  const date = new Date(item[key]);
                  return (
                    <TableCell key={index}>
                      {date.toLocaleDateString()}
                    </TableCell>
                  );
                }

                return <TableCell key={index}>{item[key]}</TableCell>;
              })}
              <TableCell>
                <TableCellActions
                  dropdownHidden={dropdownHidden}
                  onClickLeftButton={() => onOpenEditModal(item)}
                >
                  <MenuItem onClick={() => onDeleteModal(item)}>Sil</MenuItem>
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

export default EmployeeTable;
