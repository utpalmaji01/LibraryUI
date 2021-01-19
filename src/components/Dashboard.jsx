import React from "react";
import Header from "./Header.jsx";
import Body from "./Body.jsx";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <Header />
      </div>
      <div className="dashboard-body">
        <Body />
      </div>
    </div>
  );
};

export default Dashboard;
