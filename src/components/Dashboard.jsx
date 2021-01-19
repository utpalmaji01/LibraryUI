import React, { lazy, Suspense } from "react";
import Header from "./Header.jsx";
import Loader from "./Loading.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import "../style/dashboard.scss";

const Body = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Body.jsx")), 1000);
  });
});

const Dashboard = () => {
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
};

export default Dashboard;
