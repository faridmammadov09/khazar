import { TableBody as TableBodyMui } from "@mui/material";
import { pick } from "lodash";
import TableRow from "./TableRow";

const TableBody = ({ bodyData, filteredKeys }) => {
  const newBodyData = bodyData.map((item) => {
    return pick(item, filteredKeys);
  });

  return (
    <TableBodyMui>
      {newBodyData.map((item) => {
        return <TableRow key={item.id} item={item} />;
      })}
    </TableBodyMui>
  );
};

export default TableBody;
