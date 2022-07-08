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
import TableCellActions from "../TableCellActions";
import TableHeader from "../TableHeader";

const AnnouncementTable = ({ headerData, bodyData, onClickDelete }) => {
  const navigate = useNavigate();
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

  const handleShowAnnouncement = (id) => {
    navigate(`${id}`);
  };

  return (
    <Paper variant="outlined">
      <TableContainer component={Paper} elevation={0}>
        <Table aria-label="announcements table">
          <TableHeader headerData={headerData} additionalCell />

          <TableBody>
            {paginatedData.map((item) => (
              <TableRow key={item.id}>
                {Object.keys(item).map((key, index) => {
                  if (key === "id" || key === "operation") return;

                  if (key === "createdDate") {
                    const date = new Date(item[key]);
                    return (
                      <TableCell
                        key={index}
                        sx={{
                          maxWidth: 350,
                        }}
                      >
                        {date.toLocaleDateString()}
                      </TableCell>
                    );
                  }

                  return (
                    <TableCell
                      key={index}
                      sx={{
                        maxWidth: 350,
                      }}
                    >
                      {item[key]}
                    </TableCell>
                  );
                })}
                <TableCell>
                  <TableCellActions
                    onClickLeftButton={() => handleShowAnnouncement(item.id)}
                    iconShow
                  >
                    <MenuItem onClick={onClickDelete}>Sil</MenuItem>
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

export default AnnouncementTable;
