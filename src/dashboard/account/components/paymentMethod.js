import React from "react";
import { ReactComponent as BackArrow } from "../svg/backArrow.svg";
import { ReactComponent as Card } from "../svg/card.svg";
import { ReactComponent as Withdraw } from "../svg/withdraw.svg";

import "../styles/index.css";

const PaymentMethod = () => {
  return (
    <div className="dashboard__holder">
      <BackArrow />
      <div className="dashboard__payment_title">Payment Methods</div>
      <div className="dashboard__payment--option__holder">
        <div className="dashboard__payment--option">
          <Card /> <span>Debit Cards</span>
        </div>

        <div className="dashboard__payment--option">
          <Withdraw /> <span>Withdrawal Settings</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
