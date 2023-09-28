import React from "react";
import { Outlet } from "react-router-dom";

import DashboardLayout from "../../layouts/dashboard/DashboardLayout";

const Dashboards = () => {
  return (
    <div>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </div>
  );
};

export default Dashboards;
