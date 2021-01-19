import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { Component } from "react";
import clsx from "clsx";
import "../style/dashboardTable.scss";

class DashboardTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableRow: [
        {
          id: "#320",
          assigne: "Mark C. Diaz",
          taskDetails: "Support of thteme",
          paymentMethod: "Credit card",
          paymentStatus: "Approved",
          amount: "$12,245",
          trackingNumber: "IPBBN435893458",
        },
        {
          id: "#321",
          assigne: "Jose D",
          taskDetails: "Varify your email address!",
          paymentMethod: "Internet Banking",
          paymentStatus: "Pending",
          amount: "$12,245",
          trackingNumber: "BDYBN435893325",
        },
        {
          id: "#322",
          assigne: "Philips T",
          taskDetails: "Item support message send",
          paymentMethod: "Credit card",
          paymentStatus: "Approved",
          amount: "$12,245",
          trackingNumber: "JSNTN435884258",
        },
        {
          id: "#323",
          assigne: "Luke Pixel",
          taskDetails: "New submission on website",
          paymentMethod: "Cash on delivery",
          paymentStatus: "Rejected",
          amount: "$12,245",
          trackingNumber: "JPABT445893678",
        },
      ],
    };
  }
  render() {
    return (
      <div className="dashboard-table-container">
        <TableContainer>
          <Table aria-label="dashboard-table" className="table">
            <TableHead className="table-head">
              <TableRow className="table-head-row">
                <TableCell align="left" className="table-head-cell">
                  ID
                </TableCell>
                <TableCell align="left" className="table-head-cell">
                  Assignee
                </TableCell>
                <TableCell align="left" className="table-head-cell">
                  Task Details
                </TableCell>
                <TableCell align="left" className="table-head-cell">
                  Payment Method
                </TableCell>
                <TableCell align="left" className="table-head-cell">
                  Payment Status
                </TableCell>
                <TableCell align="left" className="table-head-cell">
                  Amount
                </TableCell>
                <TableCell align="left" className="table-head-cell">
                  Tracking Number
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="table-body">
              {this.state.tableRow.map((row) => (
                <TableRow key={row.id} className="table-body-row">
                  <TableCell align="left" className="table-body-cell">
                    {row.id}
                  </TableCell>
                  <TableCell align="left" className="table-body-cell">
                    {row.assigne}
                  </TableCell>
                  <TableCell align="left" className="table-body-cell">
                    {row.taskDetails}
                  </TableCell>
                  <TableCell align="left" className="table-body-cell">
                    {row.paymentMethod}
                  </TableCell>
                  <TableCell align="left" className="table-body-cell">
                    <div
                      className={clsx("status", {
                        "status-approved": row.paymentStatus === "Approved",
                        "status-pending": row.paymentStatus === "Pending",
                        "status-rejected": row.paymentStatus === "Rejected",
                      })}
                    >
                      {row.paymentStatus}
                    </div>
                  </TableCell>
                  <TableCell align="left" className="table-body-cell">
                    {row.amount}
                  </TableCell>
                  <TableCell align="left" className="table-body-cell">
                    {row.trackingNumber}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default DashboardTable;
