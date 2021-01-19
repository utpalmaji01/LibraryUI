import React from "react";
import AllAssets from "./AllAssets.jsx";
import DashboardTable from "./DashboardTable.jsx";

import "../style/body.scss";

const Body = () => {
  return (
    <div className="body-container">
      <div className="all-assets">
        <AllAssets />
      </div>
      <div className="dashboard-table">
        <DashboardTable />
      </div>
    </div>
  );
};

export default Body;
