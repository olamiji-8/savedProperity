import React from "react";
import "../../styles/ui/dashboard/dashboard.scss";
// import Navigation from "../../layouts/dashboard/Navbar";

import MainDashboard from "./MainDashboard";
// import NoActivity from "./NoActivity";
// import Profile from "./Profile";
// import RecentActivities from "./RecentActivities";
// import EmailNotification from "./EmailNotification";
// import Notification from "./Notification";

function DashboardHome() {
  return (
    <div className="dashboard">
      <div className="dashboard-content-container">
        <MainDashboard />
      </div>
    </div>
  );
}

export default DashboardHome;
