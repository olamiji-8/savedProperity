import React, { useState } from "react";

import "../../../styles/pages/walletsubs.scss";
import WalletBankInfo from "../components/WalletBankInfo";
import { WalletModal } from "../components/WalletModal";
import { Link } from "react-router-dom";
import { AiOutlineRight, AiOutlineBank, AiOutlineLeft } from "react-icons/ai";
import { BsFillXCircleFill } from "react-icons/bs";
import { MdAccountBox } from "react-icons/md";

const WalletWithdraw = () => {
  const [isModal, setIsModal] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
    setIsModal(true);
  };
  const closeModal = () => {
    setIsModal(false);
  };

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
            <p>
              {" "}
              <Link to="/dashboard/wallet/deposit"> Deposit Money </Link>{" "}
            </p>
            <p className="active">
              {" "}
              <Link to="/dashboard/wallet/withdraw"> Withdraw Money </Link>{" "}
            </p>
            <p>
              {" "}
              <Link to="/dashboard/wallet"> Transaction History</Link>{" "}
            </p>
          </section>

          <div className="walletSub-main-sub">
            <p className="active-sub"> Withdraw to Bank </p>
          </div>

          <div className="walletSub-main-container">
            <section className="transact">
              <form action="">
                <div>
                  <label htmlFor="bank">Select Bank</label> <br />
                  <p className="icons-input">
                    <AiOutlineBank size="1.2rem" className="grey to-left" />
                    <select name="" id="bank">
                      <option value="">Guaranteed Trust Bank</option>
                      <option value=""> First Bank</option>
                    </select>
                  </p>
                </div>

                <div>
                  <label htmlFor="account">Account Number</label> <br />
                  <p className="icons-input">
                    <MdAccountBox size="1.2rem" className="grey to-left" />
                    <input
                      type="text"
                      name=""
                      id="account"
                      placeholder="****2345"
                    />
                    <BsFillXCircleFill
                      size="1.2rem"
                      className="grey to-right"
                    />
                  </p>
                  <p className="switch-account">
                    <span>Switch Bank Account</span>
                    <AiOutlineRight size="10px" />
                  </p>
                </div>

                <div>
                  <label htmlFor="amount" className="label-flex">
                    <p className="float-left">Amount (NGN)</p>
                    <p className="float-right">
                      Withdrawals Balance (NGN) 120,000.00{" "}
                    </p>
                  </label>{" "}
                  <br />
                  <input type="text" name="" id="amount" placeholder="1234" />
                </div>

                <div>
                  <label htmlFor="pin">Input Transaction Pin</label> <br />
                  <input type="password" name="" id="pin" placeholder="0000" />
                </div>

                <div className="btn-container">
                  <a href="/wallet" className="previous">
                    Previous
                  </a>
                  <button className="wallet-btn" onClick={submitForm}>
                    Withdraw
                  </button>
                </div>
              </form>

              <ol>
                <li>
                  {" "}
                  Minimum deposit amount is NGN 500.00 - you can deposit at
                  least NGN 500 in one transaction.{" "}
                </li>
                <li>
                  {" "}
                  Maximum per transaction is NGN 999,999,999.00 - you can
                  deposit up to NGN 999,999,999 in one transaction.{" "}
                </li>
                <li>
                  {" "}
                  We do not share your payment information. It is used for
                  transaction verification only.{" "}
                </li>
                <li>
                  {" "}
                  If you have any issues, please contact customer service.{" "}
                </li>
                <li> Withdrawal is free, there are no transaction fees. </li>
              </ol>
            </section>

            <section className="wallet-bank-info">
              <WalletBankInfo />
            </section>
          </div>
        </div>
      </div>
      {isModal && (
        <WalletModal
          message="Congratulations on Successful Withdrawal of funds"
          amount="80,000.00"
          balance="200,000.00"
          paymentType="Withdraw"
          paidTo="Guarantee Trust Bank"
          status="Completed"
          transactionNo="345534829479357"
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default WalletWithdraw;
