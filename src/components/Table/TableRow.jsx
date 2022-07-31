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
        if (i === "id" || i === "photo") return null;

        if (i === "fullName") {
          return (
            <TableCell key={index}>
              <AvatarContainer photo={item.photo} name={item.fullName} />
            </TableCell>
          );
        }

        if (i === "date" || i === "yearOfWork" || i === "createdDate") {
          const date = new Date(item[i]);

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
              {date.toLocaleDateString("en-US", {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
              })}
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
            {item[i] ? item[i] : "—"}
          </TableCell>
        );
      })}
    </TableRowMui>
  );
};

export default TableRow;
