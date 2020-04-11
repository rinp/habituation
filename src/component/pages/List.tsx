import React, { FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  TablePagination,
  TableFooter,
} from "@material-ui/core";
import { Order, stableSort } from "../../util";

export type Data = {
  [key: string]: number | string | boolean;
};
type Key = string & keyof Data;
type Head = { id: Key; label: string };
type PHead = { id: Key; label: string; primary: true };
export type Heads = [PHead, ...Head[]];

interface Prop {
  rows: Data[];
  heads: Heads;
}

const List: FC<Prop> = ({ rows, heads }) => {
  interface EnhancedTableProps {
    onRequestSort: (property: Key) => void;
    order: Order;
    orderBy: string;
  }

  const EnhancedTableHead = (props: EnhancedTableProps) => {
    const { order, orderBy, onRequestSort } = props;

    return (
      <TableHead>
        <TableRow>
          {heads.map((head) => (
            <TableCell
              key={head.id}
              sortDirection={orderBy === head.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === head.id}
                direction={orderBy === head.id ? order : "asc"}
                onClick={() => onRequestSort(head.id)}
              >
                {head.label}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<Key>(`${heads[0].id}`);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (property: Key) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <Paper>
        <TableContainer>
          <Table>
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableFooter>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </TableFooter>
            <TableBody>
              {stableSort(rows, order, orderBy)
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow hover key={`${row.name}`}>
                      <TableCell component="th" id={labelId} scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};
export { List };
