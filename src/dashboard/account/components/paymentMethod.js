import React from "react";
import { ReactComponent as BackArrow } from "../svg/backArrow.svg";
import { ReactComponent as Card } from "../svg/card.svg";
import { ReactComponent as Withdraw } from "../svg/withdraw.svg";
import { Link } from "react-router-dom";

import "../styles/index.css";

const PaymentMethod = () => {
  return (
    <div className="dashboard__holder">
      {/* <BackArrow /><br/><br/> */}
      <div className="dashboard__payment_title">Payment Methods</div>
      <br />
      <br />
      <div className="dashboard__payment--option__holder">
        <Link to="/user/bank-details">
          <div className="dashboard__payment--option">
            <Card /> <span>Debit Cards</span>
          </div>
        </Link>
        <br />
        <br />
        <div className="dashboard__payment--option">
          <Withdraw /> <span>Withdrawal Settings</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
