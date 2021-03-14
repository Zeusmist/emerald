import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { baseUrl } from "../config";

const Verify = ({ email, userName, otpData }) => {
  let history = useHistory();
  const [otp, setOtp] = useState("");
  const [otpMessage, setOtpMessage] = useState("");
  const [isResending, setIsResending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const changeOTP = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, "");
    setOtp(value);
  };
  // console.log({ otp });
  // console.log({ otpData });

  const verifyMe = async (e) => {
    e.preventDefault();
    setIsVerifying(true);
    await fetch(`${baseUrl}/api/v1/users/verifyAccount`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, userName, otp: +otp }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if (data?.status == "fail") {
          toast.error(data.message);
          return;
        }
        history.push("/dashboard");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setIsVerifying(false);
  };

  const resendOTP = async () => {
    setIsResending(true);
    await fetch(`${baseUrl}/api/v1/users/resendOTP`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, username: userName }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if (data?.status == "error" || data?.status == "fail") {
          toast.error(data.message);
          return;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setIsResending(false);
  };

  return (
    <div className="d-flex justify-content-center align-items-center container">
      <div className="card py-5 px-3" style={{ textAlign: "center" }}>
        <h5 className="m-0">Email verification</h5>
        <span className="mobile-text">
          Enter the four digit code we just sent to your email address 
          <b class="text-danger">{email}</b>
        </span>
        <div
          className="d-flex flex-row mt-5"
          style={{ justifyContent: "center" }}
        >
          <input
            type="text"
            className="verifyInput"
            onChange={changeOTP}
            value={otp}
          />
          <div
            className="btn"
            onClick={verifyMe}
            // style={{ marginLeft: "10px" }}
          >
            {isVerifying ? (
              <Spinner animation="border" role="status" size="sm">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (
              "Verify"
            )}
          </div>
        </div>
        <small style={{ color: "red" }}>{otpMessage}</small>
        <div className="text-center mt-5">
          <span className="d-block mobile-text">Didn't receive the code?</span>
          <span
            className="font-weight-bold text-danger cursor"
            onClick={resendOTP}
          >
            {isResending ? (
              <Spinner animation="border" role="status" size="sm">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (
              "Resend"
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    userName: state.auth.userName,
    otpData: state.auth.otp,
  };
};

export default connect(mapStateToProps, null)(Verify);
