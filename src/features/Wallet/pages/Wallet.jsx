import React from "react";

import undraw_wallet from "../../../assets/dashboard_img/undraw_wallet.svg";
import { useNavigate, Link } from "react-router-dom";
import "../../../styles/pages/wallet.scss";

const Wallet = () => {
  const navigate = useNavigate();
  return (
    <div className="wallet-container">
      <div className="wallet-wrapper">
        <div className="wallet-title">Wallet</div>
        <div className="walletDiv">
          <div className="wallet-text">
            Make Transactions by Funding and Withdrawing from your Wallet
          </div>
          <img className="wallet-img" src={undraw_wallet} alt="wallet" />
        </div>
        <div className="wallet-options">
          <div className="first-wallet">
            <div className="first-wallet-text">Fund your Wallet</div>
            <Link to="deposit">
              <button
                className="first-wallet-button"
                onClick={() => navigate("deposit")}
              >
                + Add Money to your Wallet
              </button>
            </Link>
          </div>
          <div className="second-wallet">
            <div className="first-wallet-text">Withdraw Funds</div>
            <Link to="withdraw">
              {" "}
              <button
                className="first-wallet-button"
                style={{ background: "#F7F8FF33", color: "#4B5FFA" }}
                onClick={() => navigate("withdraw")}
              >
                Withdraw your Money
              </button>{" "}
            </Link>
          </div>
        </div>
        <div className="wallet-transactions">
          <div className="wallet-trans-subtitle">
            <div className="wallet-trans">Recent Transactions</div>
            <div className="wallet-trans-view">
              <div className="view-trans">View all transactions</div>
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                className="wallet-svg"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.12648 12L0 10.8493L4.74704 6L0 1.15074L1.12648 0L6.3152 5.30047C6.6957 5.6892 6.6957 6.31081 6.3152 6.69954L1.12648 12Z"
                  fill="#4B5FFA"
                />
              </svg>
            </div>
          </div>
        </div>
        <>
          <div className="wallet-trans-list">
            <div className="wallet-transDiv">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="wallet-trans-svg"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="#C4C4C4" />
              </svg>
              <div className="trans-text">
                Payment for Private 4 Bedroom Apartment with shoes and slippers
                <div className="trans-date">12/02/2021</div>
              </div>
              <div className="wallet-processing">
                <div className="processing-text">Processing</div>
              </div>
              <div className="wallet-price">N200,000,000</div>
            </div>
            <div className="wallet-transDiv">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="wallet-trans-svg"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="#C4C4C4" />
              </svg>
              <div className="trans-text">
                Added Money to your Wallet{" "}
                <div className="trans-date">12/02/2021</div>
              </div>
              <div className="wallet-processing">
                <div className="completed-text">Completed</div>
              </div>
              <div className="wallet-price">N200,000,000</div>
            </div>
            <div className="wallet-transDiv">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="wallet-trans-svg"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="#C4C4C4" />
              </svg>
              <div className="trans-text">
                You made a Withdrawal{" "}
                <div className="trans-date">12/02/2021</div>
              </div>
              <div className="wallet-processing">
                <div className="failed-text">Failed</div>
              </div>
              <div className="wallet-price" style={{ color: "#F80E0E" }}>
                N200,000,000
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Wallet;
