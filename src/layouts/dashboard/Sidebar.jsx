import React, { useState } from "react";
import sideMenuLogo from "../../assets/images/logo.png";
import { SideBarDataOne } from "../../data/Sidebar/data";
import { SideBarDataTwo } from "../../data/Sidebar/data";
import { Link, useLocation } from "react-router-dom";
import "../../styles/layout/sidebar.scss";
import googleplaylogo from "../../assets/images/sidebar-icons/google-play-store.png";
import logout from "../../assets/images/sidebar-icons/logout.png";
import logoutPrompt from "../../components/ui/logout/prompt-component";
import PromptComponent from "../../components/ui/logout/prompt-component";
import MobileSidebar from "./MobileSidebar";

const DashboardSideBar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [modal, setModal] = useState(0);
  return (
    <>
      {/* <MobileSidebar location={location.pathname} /> */}
      <aside className="side">
        <div>
          <Link to="/">
            <img src={sideMenuLogo} alt="topLogo" className="logo" />
          </Link>
        </div>

        <div>
          <ul>
            {SideBarDataOne.map((item) => {
              const { name, icon, link, id } = item;

              return (
                <Link to={link} key={id}>
                  <li className={link === pathname ? "side-link" : undefined}>
                    <img src={icon} alt="icon" className="icon" />
                    <p className="name">{name}</p>
                  </li>
                </Link>
              );
            })}
          </ul>
          <ul className="lines">
            {SideBarDataTwo.map((item) => {
              const { name, icon, link, id } = item;
              return (
                <Link to={link} key={id}>
                  <li className={link === pathname ? "side-link" : undefined}>
                    <img src={icon} alt="icon" className="icon" />
                    <p className="name">{name}</p>
                  </li>
                </Link>
              );
            })}
            <li
              className="logout-created"
              onClick={() => {
                setModal(1);
              }}
            >
              <img src={logout} alt="icon" className="icon" />
              <p className="name">Logout</p>
            </li>
          </ul>
        </div>

        <div>
          <img src={googleplaylogo} alt="googleplay" />
        </div>

        <PromptComponent
          state={modal}
          setState={setModal}
          text="You are about to signout. You can always login later. "
          buttonLabel="Logout"
        />
      </aside>
    </>
  );
};

export default DashboardSideBar;
