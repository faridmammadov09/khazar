import { TableBody as TableBodyMui } from "@mui/material";
import TableRow from "./TableRow";

const TableBody = ({ bodyData }) => {
  return (
    <TableBodyMui>
      {bodyData.map((item) => {
        return <TableRow key={item.id} item={item} />;
      })}
    </TableBodyMui>
  );
};

export default TableBody;
