import React, { useState } from "react";
import { WalletModal, BankTransferModal } from "./WalletModal";

const WalletBankTransfer = () => {
  const [isModal, setIsModal] = useState(false);
  const [transferPayment, setTransferPayment] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
    setTransferPayment(true);
  };
  const closeModal = () => {
    setIsModal(false);
  };
  const cancelTransaction = () => {
    setTransferPayment(false);
  };
  return (
    <section className="transact">
      <form action="">
        <div>
          <label htmlFor="amount" className="label-flex">
            <p className="float-left">Balance (NGN) 120,000.00</p>
            <p className="float-right">Min. 500 </p>
          </label>{" "}
          <br />
          <input type="text" name="" id="amount" placeholder="1234" />
        </div>

        <div className="btn-container">
          <a href="/wallet" className="previous">
            Previous
          </a>
          <button className="wallet-btn" onClick={submitForm}>
            Top Up Now
          </button>
        </div>
      </form>

      <article className="payment-steps">
        <h3>Payment Steps</h3>
        <div>
          <span> Step 1 </span>
          <p>
            {" "}
            Enter the amount you want to deposit and click the “Top Up Now”
            button{" "}
          </p>
        </div>
        <div>
          <span> Step 2</span>
          <p>
            {" "}
            You will be given a temporary transfer account (expires after 30
            mins).{" "}
          </p>
        </div>
        <div>
          <span> Step 3</span>
          <p>Transfer money to the account via your online banking or USSD. </p>
        </div>
        <div>
          <span> Step 4</span>
          <p>
            Check your transaction history in Renager Dashboard. Bank transfers
            generally credit within 10 minutes. If the deposit doesn’t credit
            within 24 hours, please contact your bank.{" "}
          </p>
        </div>
      </article>

      {isModal && (
        <WalletModal
          message="Congratulations on Successfully funding your wallet"
          amount="80,000.00"
          balance="200,000.00"
          paymentType="Bank Transfer"
          paidTo="Guarantee Trust Bank"
          status="completed"
          transactionNo="3455348294793573534"
          closeModal={closeModal}
        />
      )}

      {transferPayment && (
        <BankTransferModal amount="80,000" cancel={cancelTransaction} />
      )}
    </section>
  );
};

export default WalletBankTransfer;
