import React from "react";
import {
  UilFacebook,
  UilTwitter,
  UilLinkedin,
  UilInstagram,
  UilWhatsapp,
  UilCopyright,
} from "@iconscout/react-unicons";

import { Link } from "react-router-dom";

import "../styles/layout/Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container" style={{display:"flex", textJustify:"center"}}>
      <div className="footer-content">
        <div className="footer-flex">
          <div className="footer-blocks">
            <h4>EXIMIOUS</h4>
            <div>
              <p>
                Ifedore Local Government, Akure, Ondo State.
              </p>
            </div>
            <div className="footer-support" >
              <p>
                Support <span>+2349066274154</span>
              </p>
            </div>
            <div className="footer-socials">
              <UilTwitter />
              <UilLinkedin />
              <UilInstagram />
              <UilFacebook />
              <UilWhatsapp />
            </div>
          </div>
        </div>
        <br />
        <div className="copyright">
          <UilCopyright />
          <p>2023 EXIMIOUS -All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
