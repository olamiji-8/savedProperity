import { useState, useRef } from "react";
import { Outlet } from "react-router-dom";

import DashboardSideBar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const sidebar = useRef(null);
  const handleClick = () => {
    setOpenMenu((prev) => !prev);
    sidebar.current.classList.toggle("show");
  };
  return (
    <div className="dashboard">
      <div ref={sidebar} className="Sidebar">
        <DashboardSideBar />
      </div>
      <div>
        <div></div>
        <main className="DashboardPageContent">
          {children ? children : <Outlet />}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
