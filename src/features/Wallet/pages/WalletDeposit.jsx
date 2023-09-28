import React, { useState } from "react";

import WalletBankInfo from "../components/WalletBankInfo";
import WalletCardPayment from "../components/WalletCardPayment";
import WalletBankTransfer from "../components/WalletBankTransfer";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";

const WalletDeposit = () => {
  const [bankTransfer, setBankTransfer] = useState(false);

  return (
    <div className="walletSub-container">
      <div className="walletSub-mobile-nav"></div>
      <div className="walletSub">
        <div className="walletSub-main">
          <section className="walletSub-main-nav">
            <p className="back ">
              {" "}
              <Link to="/dashboard/wallet" className="flex-icon">
                {" "}
                <span>
                  <AiOutlineLeft size="1rem" />
                </span>{" "}
                <span>Back</span>{" "}
              </Link>{" "}
                 </p>
            <p className="active">
              {" "}
              <Link to="/dashboard/wallet/deposit"> Deposit Money </Link>{" "}
            </p>
            <p>
              {" "}
              <Link to="/dashboard/wallet/withdraw"> Withdraw Money </Link>{" "}
            </p>
            <p>
              {" "}
              <Link to="/dashboard/wallet"> Transaction History</Link>{" "}
            </p>
          </section>

          <div className="walletSub-main-sub">
            <p
              onClick={() => setBankTransfer(false)}
              className={bankTransfer ? undefined : "active-sub"}
            >
              Card Payment{" "}
            </p>
            <p
              onClick={() => setBankTransfer(true)}
              className={bankTransfer ? "active-sub" : undefined}
            >
              {" "}
              Bank Transfer{" "}
            </p>
          </div>

          <div className="walletSub-main-container">
            {bankTransfer ? <WalletBankTransfer /> : <WalletCardPayment />}
            <section className="wallet-bank-info">
              <WalletBankInfo />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletDeposit;
