/* eslint-disable */
import React from "react";
import { ReactComponent as BackArrow } from "../svg/backArrow.svg";
import { ReactComponent as Add } from "../svg/add.svg";
import { ReactComponent as MasterCard } from "../svg/mastercard.svg";
import Button from "../../../components/Button";

import "../styles/index.css";

const PaymentMethod = () => {
  return (
    <div className="dashboard__holder">
      <BackArrow />
      {/* <>
        <div className="dashboard__card__title">My Bank Details</div>
        <div className="dashboard__card__sub">
          Add your bank details to recieve money.
        </div>
      </> */}

      <div className="dashboard__card--cardItem__holder">
        <div className="dashboard__card--bankItem ">
          <span className="main">GUARANTY TRUST BANK</span>
          <span className="sub">*** *** 0480</span>
        </div>
      </div>
      <div className="dashboard__card__add-button">
        <Add /> <span>Add Bank</span>
      </div>
      <div className="dashboard__card__button">
        <Button
          border="1px solid #979797"
          text="Cancel"
          main="#9DCC6B"
          sub="#000"
        />
      </div>
    </div>
  );
};

export default PaymentMethod;
