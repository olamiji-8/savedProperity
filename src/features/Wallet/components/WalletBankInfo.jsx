import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai"

const BankTransactions = [
    {
        id: 1,
        detail: "Payment for Private 4 Bedroom Apartment with shoes and slippers",
        date:"16/08/23",
        status:"pending",
    },
    {
        id: 2,
        detail: "Added Money to your Wallet",
        date:"16/08/23",
        status:"success",
    },
    {
        id: 3,
        detail: "Added Money to your Wallet",
        date:"16/08/23",
        status:"failed",
    },
    {
        id: 4,
        detail: "Added Money to your Wallet",
        date:"16/08/23",
        status:"pending",
    }
]

const WalletBankInfo = () => {
    const [balance, setBalance]  = useState('20,000')

    return (
    <div>
        <section className="bank-info-container">
            <div className='balance child'>
                <p>Available Balance</p>
                <h2>N {balance}</h2>
            </div>
            <div className='bank-information child'>
                <h4>Bank Information</h4>
                <p> <span className="title">Name</span> <span className="info">John Doe</span> </p>
                <p> <span className="title">Card No.</span> <span className="info"> 1234****787899 </span> </p>
                <p> <span className="title">Card Type</span> <span className="info">Masters</span> </p>
                <p> <span className="title">Bank</span> <span className="info">Guarantee Trust Bank</span> </p>
            </div>
            <div className='transactions child'>
                <article> 
                    <h3>Transactions</h3>  
                    <Link to='/transactions'><span className='wallet-icon flex-icon'>View all <AiOutlineRight size="10px"/> </span></Link> 
                </article>
                {BankTransactions.map((transaction) => {
                    const {detail, date, status, id} = transaction;
                    return(
                        <div className= "transaction" key={id}>
                            <h5 className={status}>{detail}</h5>
                            <p>{date}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    </div>
  )
}

export default WalletBankInfo;