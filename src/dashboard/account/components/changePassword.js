/*eslint-disable*/

import React from "react";
import { ReactComponent as BackArrow } from "../svg/backArrow.svg";
import { ReactComponent as Add } from "../svg/add.svg";
import { ReactComponent as MasterCard } from "../svg/mastercard.svg";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

import "../styles/index.css";

const ChangePassword = () => {
  return (
    <div className="dashboard__holder">
      <BackArrow />
      <>
        <div className="dashboard__password--title">Change password</div>
        <div className="dashboard__password--sub">
          Add your bank details to recieve money.
        </div>
      </>
      <Input
        label="Old Password"
        labelStyle="dashboard__password--input__label"
        inputStyle="dashboard__password--input__input"
        className="dashboard__password--input"
      />
      <Input
        label="New Password"
        labelStyle="dashboard__password--input__label"
        inputStyle="dashboard__password--input__input"
        className="dashboard__password--input"
      />

      <Input
        label="Re-type New Password"
        labelStyle="dashboard__password--input__label"
        inputStyle="dashboard__password--input__input"
        className="dashboard__password--input"
      />

      <div className="dashboard__password--button">
        <Button text="Update Password" main="#0E4944" sub="#fff" />
      </div>
    </div>
  );
};

export default ChangePassword;
