import React, { useState } from "react";
import {
  WalletModal,
  AddCardModal,
  VerifyTransactionModel,
} from "./WalletModal";
import { AiOutlinePlus } from "react-icons/ai";
import Cards from "../data/cards";

const WalletCardPayment = () => {
  const [verify, setVerify] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [addCard, setAddCard] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
    setVerify(true);
  };
  const paymentCompleted = () => {
    setVerify(false);
    setIsModal(true);
  };
  const closeModal = () => {
    setVerify(false);
    setIsModal(false);
  };
  const addCardClicked = () => {
    setAddCard(true);
  };
  const cardAdded = () => {
    setAddCard(false);
  };

  return (
    <section className="transact">
      <form action="">
        <div>
          <div className="add-card-flex">
            <p>Card</p>
            <p className="add-card" onClick={addCardClicked}>
              {" "}
              <AiOutlinePlus size="1rem" /> <b>Add Card</b>{" "}
            </p>
          </div>
          <section className="cards-section">
            {Cards.map((card) => {
              const { type, logo, chip, color, name, expiryDate, number } =
                card;
              return (
                <article className="card">
                  <div className="flex">
                    <h3>{type}</h3>
                    <img src={logo} alt="card logo" />
                  </div>
                  <p>
                    {" "}
                    <img src={chip} alt="" />{" "}
                  </p>
                  <section>
                    <p className="flex">
                      <span>{name}</span>
                      <span>{expiryDate}</span>
                    </p>
                    <p>{number}</p>
                  </section>
                </article>
              );
            })}
          </section>
        </div>

        <div>
          <label htmlFor="amount" className="label-flex">
            <p className="float-left">Amount (NGN)</p>
            <p className="float-right">Min. 500 </p>
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
            Deposit
          </button>
        </div>
      </form>

      <ol>
        <li>
          Minimum deposit amount is NGN 500.00 - you can deposit at least NGN
          500 in one transaction.
        </li>
        <li>
          Maximum per transaction is NGN 999,999,999.00 - you can deposit up to
          NGN 999,999,999 in one transaction.
        </li>
        <li>
          Any card details you choose to save are encrypted. We do not store
          your CVV. We will ask you to input your Renager PIN anytime you want
          to use your card after it has been sucessfully used for the first time
          and saved.
        </li>
        <li>
          We do not share your payment information. It is used for transaction
          verification only.
        </li>
        <li>
          If you have any issues, please contact customer service. Using to many
          cards or bank accounts for deposit may cause your deposit to be
          blocked and your account restricted.
        </li>
        <li>Deposit is free, there are no transaction fees. </li>
      </ol>

      {isModal && (
        <WalletModal
          message="Congratulations on Successfully funding your wallet"
          amount="80,000.00"
          balance="200,000.00"
          paymentType="Deposit"
          paidTo="Guarantee Trust Bank"
          status="Completed"
          transactionNo="345534829479354"
          closeModal={closeModal}
        />
      )}

      {verify && (
        <VerifyTransactionModel
          closeModal={closeModal}
          completed={paymentCompleted}
        />
      )}

      {addCard && <AddCardModal closeModal={cardAdded} />}
    </section>
  );
};

export default WalletCardPayment;
