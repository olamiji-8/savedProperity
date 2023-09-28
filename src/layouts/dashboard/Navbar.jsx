import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import bell from "../../assets/svg/home/bell 1.svg";
import { Link, useLocation } from "react-router-dom";

const DropNotification = ({ texts, styles }) => {
  return (
    <div className={styles} color="#333">
      {texts.map((text, id) => (
        <div className="notification-text" key={id}>
          <Link to={text.link} onClick={text.onclick}>
            {text.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

const DashboardNavbar = () => {
  const [viewNotification, setViewNotification] = useState(false);

  return (
    <div className="dashboard_navbar">
      <div className="inner-navigation-bar">
        <div className="searchbar">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search by name, location"
          />
        </div>
        <div className="profile">
          <div
            className="notification-bell"
            onClick={() => setViewNotification((prev) => !prev)}
          >
            <img src={bell} alt="bell" />

            <DropNotification
              texts={[
                {
                  title: "Your profile verification was really successful",
                  link: "",
                },
                {
                  title: "New features have been added on Renager",
                  link: "",
                },
                { title: "View all notifications", link: "" },
              ]}
              styles={
                viewNotification ? "drop-down drop-down__open" : "drop-down"
              }
            />
          </div>
          <div className="navigation-user__image">
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <Link to={"/myaccount"}>
        <div className="menu">
          <div className="first"></div>
          <div className="middle"></div>
          <div className="last"></div>
        </div>
      </Link>

      <div className="mobile-navigation-logo">
        <Link className="" to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </div>
  );
};

export default DashboardNavbar;
