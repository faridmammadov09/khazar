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

const formatDate = (date) => new Date(date).toLocaleDateString();

const InquiryTable = ({ bodyData, onOpenDeleteModal }) => {
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

  const handleShowDayOffInquiry = (id) => {
    navigate(`${id}`);
  };

  return (
    <Paper variant="outlined">
      <TableContainer component={Paper} elevation={0}>
        <Table aria-label="users table">
          <TableHeader
            additionalCell
            headerData={["Ad Soyad Ata", "Tarix", "Status"]}
          />

          <TableBody>
            {paginatedData.map((item) => {
              const keys = ["date", "status"];

              return (
                <TableRow key={item.id}>
                  <TableCell>
                    <AvatarContainer photo={item.photo} name={item.fullName} />
                  </TableCell>

                  {keys.map((key) => {
                    if (key === "date") {
                      return (
                        <TableCell key={key}>{formatDate(item[key])}</TableCell>
                      );
                    }

                    return <TableCell key={key}>{item[key] || "—"}</TableCell>;
                  })}

                  <TableCell>
                    <TableCellActions
                      iconShow
                      onClickLeftButton={() => handleShowDayOffInquiry(item.id)}
                    >
                      <MenuItem onClick={() => onOpenDeleteModal(item)}>
                        Sil
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

export default InquiryTable;
