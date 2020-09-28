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
import { useTranslation } from "react-i18next";
import { Order, stableSort } from "../../util";

type Key = string;
type Head = { readonly key: Key; readonly label: string };
export type Heads = Readonly<Head[]>;
export type Data = {
  [key: string]: number | string | boolean;
};

interface Prop {
  heads: Heads;
  rows: Data[];
}

const List: FC<Prop> = ({ rows, heads }) => {
  const { t } = useTranslation();

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
              key={head.key}
              sortDirection={orderBy === head.key ? order : false}
            >
              <TableSortLabel
                active={orderBy === head.key}
                direction={orderBy === head.key ? order : "asc"}
                onClick={() => onRequestSort(head.key)}
              >
                {t(head.key)}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<Key>(heads[0].key);
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
                .map((row, _index) => {
                  return (
                    <TableRow hover key={`${row[heads[0].key]}`}>
                      {heads.map((head, index) => {
                        if (index === 0) {
                          return (
                            <TableCell component="th">
                              {row[head.key]}
                            </TableCell>
                          );
                        }
                        return <TableCell>{row[head.key]}</TableCell>;
                      })}
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
