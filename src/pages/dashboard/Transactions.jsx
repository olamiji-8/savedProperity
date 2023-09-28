import React from "react";

import "../../styles/pages/transactions.scss";
import credit_card from "../../assets/dashboard_img/credit_card.png";

const Transaction = () => {
  return (
    <tr className="transaction-record">
      <td className="Desktop-Col">
        <img src="https://via.placeholder.com/24" alt="" />
      </td>
      <td className="Details">
        <p className="Tran">
          Payment for Private 4 Bedroom Apartment with shoes and slippers
        </p>
        <span className="Date">12/02/2021</span>
      </td>
      <td className="Type">
        <span>Subscription</span>
      </td>
      <td className="Sts Desktop-Col">
        <span>Processing</span>
      </td>
      <td className="Amount">
        <span>N200,000,000</span>
      </td>
    </tr>
  );
};

const Transactions = () => {
  return (
    <div className="transaction-container">
      <div className="page-content">
        <h2>Transactions</h2>
        <div className="Fancy-Box">
          <p>View all your transactions on Renager</p>
          <img src={credit_card} alt="credit_card" />
        </div>
        <table className="Trans-Table">
          <thead>
            <tr className="">
              <th className="Desktop-Col">&nbsp;</th>
              <th scope="col">Details</th>
              <th scope="col">Type</th>
              <th className="Desktop-Col">Status</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
