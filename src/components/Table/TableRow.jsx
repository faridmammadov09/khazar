import { TableCell, TableRow as TableRowMui } from "@mui/material";
import AvatarContainer from "../Avatar/AvatarContainer";

const TableRow = ({ item }) => {
  return (
    <TableRowMui
      sx={{
        "&:last-child td, &:last-child th": {
          border: 0,
        },
      }}
    >
      {Object.keys(item).map((i, index) => {
        const filteredKeys = [
          "id",
          "fullName",
          "employeeId",
          "operation",
          "startDate",
          "result",
          "note",
        ];

        if (filteredKeys.includes(i)) {
          return;
        }

        if (i === "photo") {
          return (
            <TableCell key={index}>
              <AvatarContainer photo={item.photo} name={item.fullName} />
            </TableCell>
          );
        }

        return (
          <TableCell
            component="th"
            scope="row"
            key={index}
            sx={{
              maxWidth: 350,
              verticalAlign: "top",
            }}
          >
            {item[i]}
          </TableCell>
        );
      })}
    </TableRowMui>
  );
};

export default TableRow;
