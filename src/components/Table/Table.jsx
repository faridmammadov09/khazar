import {
  Paper,
  TableContainer,
  Table as TableMui,
  Typography,
} from "@mui/material";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = ({ headerData, bodyData, filteredKeys }) => {
  return (
    <Paper variant="outlined">
      <TableContainer component={Paper} elevation={0}>
        <TableMui>
          <TableHeader headerData={headerData} />

          <TableBody bodyData={bodyData} filteredKeys={filteredKeys} />
        </TableMui>

        {bodyData.length === 0 && (
          <Typography p={2} textAlign="center">
            Bu görüntüdə məlumat yoxdur.
          </Typography>
        )}
      </TableContainer>
    </Paper>
  );
};

export default Table;
