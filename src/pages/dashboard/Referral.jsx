import React from "react";

import Side from "../../../src/assets/dashboard_img/undraw_referral_4ki4 1referalillustration.png";
import CopyLink from "../reusable-components/CopyLink";

const Referral = () => {
  return (
    <div className="referral-container">
      <div className="referral-wrapper">
        <div className="referral-title">Referrals</div>
        <div className="referralDiv">
          <div className="referral-text">
            Refer People on Renager, and earn a commission once the transaction
            is completed
          </div>
          <img className="referral-img min-show" src={Side} alt="" />
        </div>
        <div className="service-provider referral-link">
          <CopyLink
            text="Share your Referral Code"
            placeholder="2xUwjsoi0DGSHWKAMSB"
          />
        </div>
        <div className="share">
          <div>Share to</div>
        </div>
        <div className="referral-links">
          <a href="#" className="link">
            <ion-icon
              name="logo-whatsapp"
              style={{ color: "green" }}
            ></ion-icon>
          </a>
          <a href="https://facebook" className="link">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a href="https://instagram" className="link">
            <ion-icon
              name="logo-instagram"
              style={{ background: "#C2DCFF" }}
            ></ion-icon>
          </a>
          <a href="https://twitter" className="link">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </div>
        <div className="total-container">
          <div className="first-total">
            <div className="total-text">Total Referrals</div>
            <div className="total-card">20 Referrals</div>
          </div>
          <div className="second-total">
            <div className="total-text">Total Amount Made from Referrals</div>
            <div className="total-card">20,000,000,000 Total</div>
          </div>
        </div>
      </div>
      <div className="history">
        <div className="history-title">Referral History</div>
        <div className="historyDiv">
          <div className="history-text">
            A New User registered through your referral link
          </div>
          <div className="history-date">12/02/2021</div>
        </div>
        <div className="historyDiv">
          <div className="history-text">
            You have earned N30,000 through your referral
          </div>
          <div className="history-date">12/02/2021</div>
        </div>
        <div className="historyDiv">
          <div className="history-text">
            A New User registered through your referral link
          </div>
          <div className="history-date">12/02/2021</div>
        </div>
        <div className="historyDiv">
          <div className="history-text">
            A New User registered through your referral link
          </div>
          <div className="history-date">12/02/2021</div>
        </div>
        <div className="historyDiv">
          <div className="history-text">
            You have earned N30,000 through your referral
          </div>
          <div className="history-date">12/02/2021</div>
        </div>
        <div className="historyDiv">
          <div className="history-text">
            A New User registered through your referral link
          </div>
          <div className="history-date">12/02/2021</div>
        </div>
        <div className="historyDiv">
          <div className="history-text">
            A New User registered through your referral link
          </div>
          <div className="history-date">12/02/2021</div>
        </div>
        <div className="historyDiv">
          <div className="history-text">
            You have earned N30,000 through your referral
          </div>
          <div className="history-date">12/02/2021</div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
