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
        <div className="dashboard__card__title">My Debit Cards</div>
        <div className="dashboard__card__sub">
          All your cards are managed securely by Emerald Farms right here. TAP a
          card for more options.
        </div>
      </> */}

      <div className="dashboard__card--cardItem__holder">
        <div className="dashboard__card--cardItem ">
          <MasterCard /> <span>**** **** **** 5555</span>
        </div>
      </div>
      <div className="dashboard__card__add-button">
        <Add /> <span>Add New Card</span>
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
