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
import rate from "../assets/svg/Sell and Lease/rate.svg";
import headerbg from "../assets/svg/Sell and Lease/headerbg.png";
import otherbg from "../assets/svg/Sell and Lease/allura3.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import sellHeaderImage from "../assets/svg/Sell and Lease/sellHeaderImage.svg";
import percent from "../assets/svg/Sell and Lease/percentage.svg";
import clock from "../assets/svg/Sell and Lease/clock.svg";
import card from "../assets/svg/Sell and Lease/card.svg";
const SellPage = () => {
  return (
    <div className="sell_page">
      <header style={{ backgroundImage: `url(${headerbg})` }}>
        <div className="sell_header">
          <div className="sell_header_text">
            <h1>
              Smarter way to <span>SELL</span>
            </h1>
            <p className="large-screen">Safer and Faster</p>
            <p className="mobile">
              Renager ensures a more secure and faster way for property owners
              to sell their properties
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
              Sell Property Now{" "}
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
            <img src={sellHeaderImage} alt="" />
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
              <p>Select your role</p>
            </div>
            <div className="minicard">
              <img src={schedule} alt="" />
              <p>Schedule inspection</p>
            </div>
            <div className="minicard">
              <img src={approve} alt="" />
              <p>Property verification and upload</p>
            </div>
          </div>
          <div className="right">
            <p>Sounds Easy Right</p>
            <Button text="Start Here" link="/" />
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
            <img src={rate} alt="" />
            <div className="">
              <h4>Cheaper commission rate</h4>
              <p>
                With a maximum 5% commision fee, Renager offers a better
                alternative to sell your property
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
            <img src={transactions} alt="" />
            <div className="">
              <h4>Quick transactions </h4>
              <p>
                We assure users speedy completion of transactions via our
                platform.
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

export default SellPage;
