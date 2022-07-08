import { TableCell, TableHead, TableRow } from "@mui/material";

const TableHeader = ({ headerData, additionalCell }) => {
  return (
    <TableHead>
      <TableRow sx={{ bgcolor: "#F5F5F5" }}>
        {headerData.map((title, index) => (
          <TableCell key={index}>{title}</TableCell>
        ))}

        {additionalCell && <TableCell></TableCell>}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
