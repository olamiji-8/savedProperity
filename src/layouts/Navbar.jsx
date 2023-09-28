import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import bell from "../assets/svg/home/bell 1.svg";
import dropDown from "../assets/svg/home/drop-down.svg";
import { Link, useLocation } from "react-router-dom";

import Button from "../components/ui/Button";
const DropNotification = ({ texts, styles }) => {
  return (
    <div className={styles} color="#333">
      {texts.map((text, id) => (
        <div className="notification-text" key={id}>
          <Link to="/">{text}</Link>
        </div>
      ))}
    </div>
  );
};

const Navigation = () => {
  const location = useLocation();

  const [viewNotification, setViewNotification] = useState(false);
  const [viewProfile, setViewProfile] = useState(true);
  const [signedIn, setSignedIn] = useState(true);

  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = function (e) {
    e.target.closest(
      ".menu"
    ).previousElementSibling.dataset.visible = `${openMenu}`;
    setOpenMenu((prev) => !prev);
  };
  return (
    <div className="navigation-bar">
      <div className="inner-navigation-bar" data-visible={openMenu}>
        <a href= "https://eximious.vercel.app"className="navigation-logo"  style={{textDecoration:"none"}}>
        <p style={{ color:"blue", marginLeft:"20%", fontSize:"24px"}}>EXIMIOUS </p>
        </a>
        {!(location.pathname === "/service-provider") ? (
          <div className="">
            <ul>
              <li>Buy</li>
              <li>Lease</li>
              <li>Rent</li>
              <li>Sell</li>
              <li>Services</li>
            </ul>
          </div>
        ) : (
          location.pathname
        )}
        {signedIn ? (
          <div className="profile">
            {location.pathname === "/service-provider" ? (
              <Button text="Become a Service Provider" link="/" />
            ) : (
              location.pathname
            )}
          </div>
        ) : (
          signedIn
        )}
      </div>
      <div
        className={openMenu ? "menu menu-open" : "menu"}
        onClick={handleClick}
      >
        <div className="first"></div>
        <div className="middle"></div>
        <div className="last"></div>
      </div>
      <Link className="mobile-navigation-logo" to="/">
        EXIMIOUS
      </Link>
    </div>
  );
};

export default Navigation;
