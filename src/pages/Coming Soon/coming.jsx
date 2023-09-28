import React, { useState } from "react";
import "./coming.scss";
import bgimage from "../../assets/svg/Coming Soon/bg-image.svg";
import footerImage from "../../assets/images/Coming Soon/footer_image.png";
import landscape from "../../assets/images/Coming Soon/landscape.png";
import landscape2 from "../../assets/images/Coming Soon/landscape2.png";
import cards from "../../assets/images/Coming Soon/cards.png";
import computer from "../../assets/images/Coming Soon/computer.png";
import house from "../../assets/images/Coming Soon/house.png";
import referrals from "../../assets/images/Coming Soon/referrals.png";
import headerLogo from "../../assets/images/Coming Soon/real-estate.png";
import logo from "../../assets/images/logo.png";
import Button from "../../components/ui/Button";
import galleryImage from "../../assets/images/Coming Soon/Frame 873.png";

import {
  UilFacebookF,
  UilTwitter,
  UilLinkedinAlt,
  UilGithub,
  UilGooglePlay,
  UilApple,
  UilWebSection,
} from "@iconscout/react-unicons";
import { useCountDown } from "../../hooks/useCountdown";

const ShadowCard = ({ children }) => {
  return <div className="shadow-card-component">{children} </div>;
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <div className="hours">
        <h1>{hours}</h1>
        <p>Hours</p>
      </div>
      <div className="minutes">
        <h1>{minutes}</h1>
        <p>Minutes</p>
      </div>
      <div className="seconds">
        <h1>{seconds}</h1>
        <p>Seconds</p>
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountDown(targetDate);
  return (
    <ShowCounter
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  );
};

const Coming = () => {
  const deadlinePeriod = 3 * 24 * 60 * 60 * 1000;
  const deadline = new Date().getTime() + deadlinePeriod;
  const style = { backgroundImage: `url(${bgimage})` };
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = function (e) {
    e.target.closest(
      ".menu"
    ).previousElementSibling.dataset.visible = `${openMenu}`;
    setOpenMenu((prev) => !prev);
  };
  return (
    <div className="Coming__soon" style={style}>
      <div className="navbar">
        <div className="inner-navigation-bar" data-visible={openMenu}>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <ul>
            <li>Features</li>
            <li>Blog</li>
            <li>Career</li>
          </ul>
          <Button text="Join the waiting list" link="" />
        </div>
        <div
          className={openMenu ? "menu menu-open" : "menu"}
          onClick={handleClick}
        >
          <div className="first"></div>
          <div className="middle"></div>
          <div className="last"></div>
        </div>
        <div className="mobile-navigation-logo">
          <a className="" href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
      </div>
      {/* Header */}
      <div className="Coming--soon__header">
        <div className="coming_header_text">
          <h1>Real Estate Transactions Made Easy</h1>
          <p>
            Renager offers a more effective and user-friendly real estate
            transaction platform with fully automated steps to provide a
            flawless transaction experience and other features that will astound
            you.
          </p>
          <h2>Get notified when we launch</h2>
          <div className="searchbar">
            <input type="email" name="email" id="email" />
            <Button text="Notify Me" link="" />
          </div>
          <div className="socials">
            <UilTwitter />
            <UilGithub />
            <UilFacebookF />
            <UilLinkedinAlt />
          </div>
        </div>
        <div className="coming_header_image">
          <img src={headerLogo} alt="" />
        </div>
      </div>
      {/* countdown */}
      <div className="countdown__section">
        <p className="countdown__text">Launching in</p>
        <h2 className="countdown__sale">Sale up to -50% Off!</h2>
        <div>
          <CountdownTimer targetDate={deadline} />
        </div>
      </div>
      {/* Imagge section */}
      <div className="image__section">
        <img src={landscape} alt="" />
      </div>
      <div className="image__section2">
        <img src={landscape2} alt="" />
      </div>
      {/* Card Sections */}
      <div className="Coming__soon__cards">
        <ShadowCard
          children={
            <div className="coming__soon__card">
              <img src={cards} alt="" />
              <div className="card_text">
                <h2>Online payment</h2>
                <p>
                  Our payment gateway has made it easier for prospective
                  property owners and tenants to complete all their transactions
                  all on the platform without any form of discomfort.
                </p>
                <Button text={"Join the waiting list"} link="" />
              </div>
            </div>
          }
        />
        <ShadowCard
          children={
            <div className="coming__soon__card">
              <img src={house} alt="" />
              <div className="card_text">
                <h2>Eliminate house hunting stress</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vitae nulla ultricies lobortis tempor pulvinar diam. Et
                  venenatis sapien faucibus diam tortor in vitae eu.
                </p>
                <Button text={"Join the waiting list"} link="" />
              </div>
            </div>
          }
        />
        <ShadowCard
          children={
            <div className="coming__soon__card">
              <img src={computer} alt="" />
              <div className="card_text">
                <h2>Secured platform </h2>
                <p>
                  Our payment gateway has made it easier for prospective
                  property owners and tenants to complete all their transactions
                  all on the platform without any form of discomfort.
                </p>
                <Button text={"Join the waiting list"} link="" />
              </div>
            </div>
          }
        />
        <ShadowCard
          children={
            <div className="coming__soon__card">
              <img src={referrals} alt="" />
              <div className="card_text">
                <h2>Referral bonuses</h2>
                <p>
                  Our payment gateway has made it easier for prospective
                  property owners and tenants to complete all their transactions
                  all on the platform without any form of discomfort.
                </p>
                <Button text={"Join the waiting list"} link="" />
              </div>
            </div>
          }
        />
      </div>
      <footer className="footer">
        <div className="footer-flex">
          <div className="footer_text">
            <p>Seen Enough</p>
            <h3>Join the 800 people on the our waiting list </h3>
            <div className="searchbar">
              <input type="email" name="email" id="" />
              <Button text="Join the waiting list" link="" />
            </div>
            <p>Coming Soon To</p>
            <div className="downloads">
              <div className="">
                <UilGooglePlay />
                <p>Play Store</p>
              </div>
              <div className="">
                <UilApple />
                <p>App Store</p>
              </div>
              <div className="">
                <UilWebSection />
                <p>Web App</p>
              </div>
            </div>
          </div>

          <div className="footer_flex_image">
            <img src={footerImage} alt="" />
          </div>
        </div>
      </footer>
      <div className="footer_images">
        <img src={galleryImage} alt="" />
      </div>
    </div>
  );
};

export default Coming;
