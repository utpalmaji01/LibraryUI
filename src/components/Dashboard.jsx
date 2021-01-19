import React, { lazy, Suspense } from "react";
import Header from "./Header.jsx";
import Loader from "./Loading.jsx";

const Body = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Body.jsx")), 5000);
  });
});

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <Header />
      </div>
      <Suspense fallback={<Loader />}>
        <div className="dashboard-body">
          <Body />
        </div>
      </Suspense>
    </div>
  );
};

export default Dashboard;
