import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { AiFillBank, AiOutlineLeft } from "react-icons/ai";
import { FiCopy } from "react-icons/fi";
import { BiLoaderCircle } from "react-icons/bi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import {
  BsFillCreditCard2BackFill,
  BsCreditCardFill,
  BsFillInfoCircleFill,
} from "react-icons/bs";
import { TbCircleDashed } from "react-icons/tb";
import logo from "../../../assets/images/logo.png";
import "../../../styles/pages/walletsubs.scss";

export const WalletModal = ({
  status,
  paymentType,
  transactionNo,
  amount,
  paidTo,
  balance,
  message,
  closeModal,
}) => {
  const currentDate = new Date();
  let dateTime =
    currentDate.getDate() +
    "/" +
    currentDate.getMonth() +
    " " +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();

  return (
    <div className="wallet-modal-container">
      <section className="wallet-modal">
        <div className="flex-div">
          {" "}
          <img src={logo} alt="logo" width="100" />{" "}
          <FaTimes onClick={closeModal} className="wallet-icon" />{" "}
        </div>
        <span className="message">{message}</span>
        <div className="wallet-modal-amount flex-div">
          <p>Amount (NGN) </p>
          <p> {amount} </p>
        </div>
        <div className="flex-div">
          <span className="grey">Status</span>
          <p
            className={
              status === ("Completed" || "completed") ? "success" : "pending"
            }
          >
            {status}
          </p>
        </div>
        <div className="flex-div">
          <span className="grey">Time</span>
          <p>{dateTime}</p>
        </div>
        <div className="flex-div">
          <span className="grey">Payment type</span>
          <p>{paymentType}</p>
        </div>
        <div className="flex-div">
          <span className="grey">Paid to</span>
          <p>{paidTo}</p>
        </div>
        <div className="flex-div">
          <span className="grey">Transaction no.</span>
          <p>{transactionNo}</p>
        </div>
        <div className="flex-div">
          <span className="grey">Balance (NGN) </span>
          <p>{balance}</p>
        </div>

        <p className="wallet-modal-btn">
          <button onClick={closeModal} className="btn">
            Continue
          </button>
        </p>
      </section>
    </div>
  );
};

export const BankTransferModal = ({ cancel, amount }) => {
  const [checkStatus, setCheckStatus] = useState(false);
  const [isShowAccount, setIsShowAccount] = useState(true);

  const checkTransactionStatus = () => {
    setIsShowAccount(false);
  };

  return (
    <div className="wallet-modal-container">
      <section className="wallet-modal">
        <div className="flex-div">
          <h3 className="flex-icon">
            {" "}
            <AiFillBank size="2rem" /> <span>Pay with Transfer</span>{" "}
          </h3>
          <FaTimes onClick={cancel} className="wallet-icon" />
        </div>

        <p className="wallet-text-right">
          23455894595@renager <br /> Pay{" "}
          <span className="success">NGN {amount}</span>{" "}
        </p>

        {isShowAccount ? (
          <section>
            <p className="message">
              Transfer NGN <span className="pending">{amount}</span> to paystack
              checkout
            </p>
            <div className="wallet-account-transfer">
              <p>Wema Bank</p>
              <div className="flex-icon">
                <h2>0123456789</h2> <FiCopy className="wallet-icon" />{" "}
              </div>
              <p className="grey">Use this account for the transaction only</p>
              <p className="grey">
                Account expires in <span className="pending">30 minutes</span>
              </p>
            </div>
          </section>
        ) : (
          <section>
            <p className="message">
              We’re waiting to receive your transfer. <br /> This can take a
              while
            </p>
            <div className="flex-status">
              <p className="success message flex-status-icon">
                {" "}
                <IoIosCheckmarkCircle size="1.5rem" /> <br /> Sent{" "}
              </p>
              <p className="flex-status-dash"></p>
              <p className="grey message flex-status-icon">
                {" "}
                <TbCircleDashed size="1.5rem" /> <br /> Recieved{" "}
              </p>
            </div>
            <div className="show-account">
              <p className="message"> Please wait for 9:48 </p>
              <button className="show-account-btn"> Show bank account </button>
            </div>
          </section>
        )}

        <div className="flex-payment-btns">
          <p className="change-method">Change Payment Method</p>
          <button
            onClick={checkTransactionStatus}
            className={isShowAccount ? "btn" : "btn btn-disabled"}
          >
            {" "}
            I've sent the money{" "}
          </button>
        </div>
      </section>
    </div>
  );
};

export const AddCardModal = ({ closeModal }) => {
  return (
    <div className="wallet-modal-container">
      <section className="wallet-modal">
        <div className="flex-div">
          <h3>Add New Card</h3>
          <FaTimes onClick={closeModal} className="wallet-icon" />
        </div>

        <section>
          <form action="" className="new-card-form">
            <div>
              <label htmlFor="cardNumber">Card Number</label> <br />
              <p>
                <input
                  type="text"
                  name=""
                  id="cardNumber"
                  placeholder="0000 0000 0000 0000"
                />
                <span>
                  {" "}
                  <BsFillCreditCard2BackFill
                    size="1rem"
                    className="grey"
                  />{" "}
                </span>
              </p>
            </div>

            <section>
              <div>
                <label htmlFor="expiryDate">Expiry Date</label> <br />
                <p>
                  <input
                    type="text"
                    name=""
                    id="expiryDate"
                    placeholder="MM / YY"
                    maxLength={4}
                  />
                  <span>
                    {" "}
                    <BsCreditCardFill size="1rem" className="grey" />{" "}
                  </span>
                </p>
              </div>

              <div>
                <label htmlFor="cvc">CVC / CVV</label> <br />
                <p>
                  <input
                    type="text"
                    name=""
                    id="cvc"
                    placeholder="123"
                    maxLength={3}
                  />
                  <span>
                    {" "}
                    <BsFillInfoCircleFill size="1rem" className="grey" />{" "}
                  </span>
                </p>
              </div>
            </section>

            <div>
              <label htmlFor="name">Cardholder Name</label>
              <input type="text" placeholder="Enter cardholder's name" />
            </div>

            <button className="btn">
              {" "}
              <b>Add Card</b>{" "}
            </button>
          </form>
        </section>
      </section>
    </div>
  );
};

export const VerifyTransactionModel = ({ closeModal, completed }) => {
  return (
    <div className="wallet-modal-container">
      <section className="wallet-modal">
        <h4 className="flex-icon wallet-icon" onClick={closeModal}>
          {" "}
          <AiOutlineLeft /> <span>Back</span>{" "}
        </h4>
        <p className="message">
          {" "}
          <b>We sent you a code to verify your transaction </b>{" "}
        </p>
        <div>
          <p className="message">Enter your OTP code here</p>
          <form action="">
            <section className="OTP-inputs">
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
            </section>
            <p className="message">
              {" "}
              Code would be resent after 60s <br /> Didn't receive an OTP?{" "}
              <b>Resend OTP</b>{" "}
            </p>
            <button
              onClick={completed}
              className="btn"
              style={{ margin: "auto", padding: "0.7rem 2.5rem" }}
            >
              Complete Payment
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
