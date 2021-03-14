import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { baseUrl } from "../config";

const Verify = ({ email, otpData }) => {
  let history = useHistory();
  const [otp, setOtp] = useState("");
  const [otpMessage, setOtpMessage] = useState("");

  console.log(otp);

  console.log(otpData);
  const verifyMe = async (e) => {
    e.preventDefault();
    console.log("yes");

    await fetch(`${baseUrl}/api/v1/users/verifyAccount`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, otp: +otp }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        history.push("/dashboard");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center container">
      <div className="card py-5 px-3">
        <h5 className="m-0">Mobile phone verification</h5>
        <span className="mobile-text">
          Enter the four digit code we just send to your email address 
          <b class="text-danger">{email}</b>
        </span>
        <div className="d-flex flex-row mt-5">
          <input
            type="number"
            className="verifyInput"
            onChange={(e) => {
              setOtp(e.target.value);
            }}
          />
          <button onClick={verifyMe}>Verify</button>
        </div>
        <small style={{ color: "red" }}>{otpMessage}</small>
        <div className="text-center mt-5">
          <span className="d-block mobile-text">Don't receive the code?</span>
          <span className="font-weight-bold text-danger cursor">Resend</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    otpData: state.auth.otp,
  };
};

export default connect(mapStateToProps, null)(Verify);
