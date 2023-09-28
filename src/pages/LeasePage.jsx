import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Footer from "../layouts/Footer";

import headerImage from "../assets/svg/Sell and Lease/headerImage.svg";
import approve from "../assets/svg/Sell and Lease/approve.svg";
import role from "../assets/svg/Sell and Lease/role.svg";
import schedule from "../assets/svg/Sell and Lease/schedule.svg";
import signup from "../assets/svg/Sell and Lease/signup.svg";
import payment from "../assets/svg/Sell and Lease/payment.png";
import PropertyDataManagement from "../assets/svg/Sell and Lease/Property.png";
import transactions from "../assets/svg/Sell and Lease/transactions.png";
import headerbg from "../assets/svg/Sell and Lease/headerbg.png";
import otherbg from "../assets/svg/Sell and Lease/allura3.jpg";
import wait from "../assets/svg/Sell and Lease/wait.svg";
import percent from "../assets/svg/Sell and Lease/percentage.svg";
import clock from "../assets/svg/Sell and Lease/clock.svg";
import card from "../assets/svg/Sell and Lease/card.svg";
import { MdKeyboardArrowRight } from "react-icons/md";
const LeasePage = () => {
  return (
    <div className="sell_page">
      <header style={{ backgroundImage: `url(${headerbg})` }}>
        <div className="sell_header">
          <div className="sell_header_text">
            <h1>
              <span>LEASE</span> the smarter way
            </h1>
            <p className="large-screen">Safer and Faster</p>
            <p className="mobile">
              Renager provides a Safer and Faster way for property owners to
              lease their properties.
            </p>
            <Link
              to="/"
              className="mobile"
              style={{
                color: "",
                display: "flex",
                alignItems: "center",
                color: "#4B5FFA",
                marginTop: "50px",
              }}
            >
              Lease Property Now
              <MdKeyboardArrowRight
                style={{
                  color: "",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "20px",
                }}
              />
            </Link>
          </div>
          <div className="sell_header_image">
            <img src={headerImage} alt="" />
          </div>
        </div>
      </header>
      <section
        style={{ backgroundImage: `url(${otherbg})` }}
        className="section"
      >
        <div className="section1">
          <h4>
            We have made it easier than ever for you to lease
            <br /> your property. Just follow these <span>4 easy steps</span>
          </h4>

          <div className="minicards">
            <div className="minicard">
              <img src={signup} alt="" />
              <p>
                Sign Up <span className="mobile">/Log in</span>
              </p>
            </div>
            <div className="minicard">
              <img src={role} alt="" />
              <p className="large-screen ">Select your role</p>
              <p className="mobile">
                Go to Properties on Dashboard (Register as a Leaser)
              </p>
            </div>
            <div className="minicard">
              <img src={schedule} alt="" />
              <p className="large-screen">Schedule inspection</p>
              <p className="mobile">
                Schedule a date for inspection and Photography by the Renager
                Team
              </p>
            </div>
            <div className="minicard mobile">
              <img src={wait} alt="" />
              <p className="mobile">Wait for Approval</p>
            </div>
            <div className="minicard">
              <img src={approve} alt="" />
              <p className="large-screen">Property verification and upload</p>
              <p className="mobile">
                After approval check your property on your dashboard and get
                notified once you get a Buyer
              </p>
            </div>
          </div>
          <div className="right">
            <p>Sounds Easy Right?</p>
            <Button text="Sign up" link="/" />
          </div>
        </div>
      </section>
      <section className="why_lease">
        <h2>Why should I lease my property on Renager?</h2>
        <p>
          We understand you have questions. Read the <br />
          benefits we have to offer
        </p>
        <div className="details_cards">
          <div className="detail_card large-screen">
            <img src={transactions} alt="" />
            <div className="">
              <h4>Quick transactions </h4>
              <p>
                We assure users speedy completion of transactions via our
                platform
              </p>
            </div>
          </div>
          <div className="detail_card mobile">
            <img src={percent} alt="" />
            <div className="">
              <h4>Cheaper commission rate</h4>
              <p>
                With a maximum 5% commision fee, Renager offers a better
                alternative to sell your property
              </p>
            </div>
          </div>
          <div className="detail_card large-screen">
            <img src={payment} alt="" />
            <div className="">
              <h4>Direct payment</h4>
              <p>
                With our payment gateway, users are fully assured of being
                credited after a transaction is completed.
              </p>
            </div>
          </div>
          <div className="detail_card mobile">
            <img src={clock} alt="" />
            <div className="">
              <h4>Quick transaction</h4>
              <p>
                We assure users speedy completion of transactions via our
                platform
              </p>
            </div>
          </div>
          <div className="detail_card large-screen">
            <img src={PropertyDataManagement} alt="" />
            <div className="">
              <h4>Property data management</h4>
              <p>
                Keeping track of properties now get easier with Renager as we
                help with the automation of users' property records.
              </p>
            </div>
          </div>
          <div className="detail_card mobile">
            <img src={card} alt="" />
            <div className="">
              <h4>Direct payment</h4>
              <p>
                With our payment gateway, users are fully assured of being
                credited after a transaction is completed.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LeasePage;
