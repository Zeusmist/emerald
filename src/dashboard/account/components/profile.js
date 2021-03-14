import React from "react";
import "../styles/index.css";
import { ReactComponent as Farmer } from "../svg/farmer.svg";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const Profile = () => {
  return (
    <div className="dashboard__holder">
      <div className="dashboard__profile--title">User Profile</div>
      <div className="dashboard__profile--avatar">
        <Farmer />
      </div>
      <div className="dashboard__profile--form">
        <div className="dashboard__profile--form__mini">
          <Input
            className="dashboard__profile--form__mini--input"
            label="First Name"
            value="Anchorit"
          />
          <Input
            className="dashboard__profile--form__mini--input"
            label="First Name"
            value="Internationsl"
          />
        </div>
        <Input placeholder=",anchorit@gmail.com" />
        <Input placeholder="0389930333" />
        <Input placeholder="43 edumotp street" />
      </div>
      <div className="dashboard__profile--form__separator" />
      <div
        style={{ marginBottom: "40px" }}
        className="dashboard__profile--title"
      >
        Next of Kin
      </div>

      <div className="dashboard__profile--form">
        <div className="dashboard__profile--form__mini">
          <Input
            className="dashboard__profile--form__mini--input"
            label="First Name"
            value="Anchorit"
          />
          <Input
            className="dashboard__profile--form__mini--input"
            label="First Name"
            value="Internationsl"
          />
        </div>
        <Input placeholder=",anchorit@gmail.com" />
        <Input placeholder="0389930333" />
        <Input placeholder="43 edumotp street" />
        <Button
          className="dashboard__profile--form__button"
          text="Update"
          main="#0E4944"
          sub="#fff"
        />
      </div>
    </div>
  );
};

export default Profile;
