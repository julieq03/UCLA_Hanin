import React, { useMemo, useState } from "react";
//TODO dig deeper for useMemo
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { useTable } from "react-table";
import DummyItems from "./dummyItems.js";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect } from "react";

//TODO should read from database and map them into a table
//react-table  https://kalacloud.com/blog/best-react-table-component/
//Search bar reference: https://juejin.cn/post/7061863419636351006
//TODO make 'status' entries separate tasks_components
//TODO make 'category' a drop-down menu
//TODO make decent search bar and filters
//TODO style other places in this page

function TableComponent({ categoryFilter }) {
  const data = React.useMemo(() => DummyItems.tasks, []);
  const columns = React.useMemo(() => DummyItems.headers);

  const [tasks, setTasks] = useState([]);

  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  console.log("categoryFilter: ", categoryFilter);

  // console.log("categoryFilter : ", categoryFilter);
  // console.log("rows: ", rows);
  rows.map((row) => {
    console.log("row.original: ", row.original);
    // console.log("row.cells[1]: ", row.cells[1]);
  });

  function getFilteredList() {
    return rows.filter((row) => row.original.category === categoryFilter);
  }

  return (
    <React.Fragment>
      <TableContainer className="itemList">
        <Table {...getTableProps}>
          <TableHead>
            {
              // Loop over the header rows
              headerGroups.map((headerGroup) => (
                // Apply the header row props
                <TableRow {...headerGroup.getHeaderGroupProps}>
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column) => (
                      // Apply the header cell props
                      <TableCell {...column.getHeaderProps}>
                        {
                          // Render the header
                          column.render("Header")
                        }
                      </TableCell>
                    ))
                  }
                </TableRow>
              ))
            }
          </TableHead>
          {/* Apply the table body props */}
          <TableBody {...getTableBodyProps}>
            {
              // Loop over the table rows
              rows.map((row) => {
                if (
                  categoryFilter === "Show All" ||
                  row.original.category === categoryFilter
                ) {
                  // Prepare the row for display
                  prepareRow(row);
                  return (
                    // Apply the row props

                    <TableRow {...row.getRowProps} className="tableRow">
                      {
                        // Loop over the rows cells
                        row.cells.map((cell) => {
                          // Apply the cell props
                          return (
                            <TableCell {...cell.getCellProps}>
                              <Link
                                to="/itemDetails"
                                state={{
                                  item_customername: `${cell.row.original.customername}`,
                                  item_category: `${cell.row.original.category}`,
                                  item_price: `${cell.row.original.price}`,
                                  item_description: `${cell.row.original.description}`,
                                  item_date: `${cell.row.original.date}`,
                                  item_status: `${cell.row.original.status}`,
                                }}
                                className="itemLink"
                              >
                                {
                                  // Render the cell contents
                                  cell.render("Cell")
                                }
                              </Link>
                            </TableCell>
                          );
                        })
                      }
                    </TableRow>
                  );
                }
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}

export default TableComponent;
