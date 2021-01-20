import React from "react";
import AllAssets from "./AllAssets.jsx";
import DashboardTable from "./DashboardTable.jsx";
import ManageTickets from "./ManageTickets.jsx";
import UserDetails from "./UserDetails.jsx";
import "../style/body.scss";

const Body = () => {
  
  return (
    <div className="body-container">
      <div className="all-assets">
        <AllAssets />
      </div>
      <div className="user-details">
        <UserDetails/>
      </div>
      <div className="dashboard-table">
        <DashboardTable />
      </div>
      <div className="manage-ticket">
        <ManageTickets />
      </div>
     
    </div>
  );
};

export default Body;
