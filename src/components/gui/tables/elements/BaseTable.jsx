import { useState, useEffect } from "react";

import EnhancedTableHead from "./EnhancedTableHead";
import EnhancedTableToolbar from "./EnhancedTableToolbar";

import { 
  Box,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
} from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';

import ActionTableRow from "./ActionTableRow";

import RightMenuContainer from "../../containers/RightMenuContainer";

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const BaseTable = ({rows, headCells, notfound}) => {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('firstname');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
          const newSelected = rows.map((n) => n.id);
          setSelected(newSelected);
          return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];
    
        if (selectedIndex === -1) {
          newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
          newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
          newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
          );
        }
    
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const resetSlectedElements = () => setSelected([])
    

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const optionsContextListItems = [
      {
        icon: <DeleteIcon />,
        text: 'Delete Contact',
        action: (data) => {
          alert(`Hello ${data.firstname} ${data.lastname}`)
        }
      }
    ]

    return (
        <RightMenuContainer contextList={optionsContextListItems}>
          <Box sx={{ width: '100%' }}>
              <Paper sx={{ width: '100%', mb: 2 }}>
                  <EnhancedTableToolbar numSelected={selected.length} ids={selected} reset={resetSlectedElements} />
                  <TableContainer>
                      <Table
                          sx={{ minWidth: 750 }}
                          aria-labelledby="tableTitle"
                          size={dense ? 'small' : 'medium'}
                      >
                          <EnhancedTableHead
                              numSelected={selected.length}
                              order={order}
                              orderBy={orderBy}
                              onSelectAllClick={handleSelectAllClick}
                              onRequestSort={handleRequestSort}
                              rowCount={rows.length}
                              headCells={headCells}
                          />
                          <TableBody>
                          {stableSort(rows, getComparator(order, orderBy))
                              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                              .map((row, index) => {
                              const isItemSelected = isSelected(row.id);
                              const labelId = `enhanced-table-checkbox-${index}`;

                              return (
                                  <ActionTableRow isItemSelected={isItemSelected} labelId={labelId} row={row} handleClick={handleClick} headCells={headCells} />
                              );
                          })}
                          {
                            rows.length == 0 && (
                              <TableRow>
                                <TableCell colSpan={5}>
                                  <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100% '}}>
                                    {notfound}
                                  </Box>
                                </TableCell>
                              </TableRow>
                            )
                          }
                          {emptyRows > 0 && (
                              <TableRow
                              style={{
                                  height: (dense ? 33 : 53) * emptyRows,
                              }}
                              >
                              <TableCell colSpan={6} />
                              </TableRow>
                          )}
                          </TableBody>
                      </Table>
                  </TableContainer>
                  <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  />
              </Paper>
          </Box>
        </RightMenuContainer>
    )
}

export default BaseTable