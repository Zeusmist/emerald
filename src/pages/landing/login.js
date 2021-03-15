import React, { useState } from "react";
import { connect } from "react-redux";
import "./styles/login.css";
import { UsernameIcon, PasswordIcon } from "./svg";
import { signInStart } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const Login = ({ closeModal, signInStart, auth }) => {
  const history = useHistory();

  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });
  const [isLogingIn, setIsLogingIn] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setCreds((creds) => ({ ...creds, [name]: value }));
  };

  const onSignIn = async (e) => {
    e.preventDefault();
    setIsLogingIn(true);
    signInStart(
      creds,
      () => {
        history.push("/dashboard");
      },
      () => setIsLogingIn(false)
    );
  };
  return (
    <div className="loginContainer">
      {/* <div className="loginText">Login</div> */}
      <div className="loginCard">
        <div className="cardHeader">
          <div className="welcomeText">Welcome Guest</div>
          <a onClick={closeModal} className="cancelLogin">
            &#x2715;
          </a>
        </div>
        <form method="#">
          <div>
            <div className="inputLabel">
              <div className="inputLabelText">Email</div>
              <UsernameIcon className="inputLabelImg" />
            </div>
            <input
              className="inputField"
              type="text"
              name="email"
              placeholder="johndoe@email.com"
              required="required"
              value={creds?.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="inputLabel">
              <div className="inputLabelText">Password</div>
              <PasswordIcon className="inputLabelImg" />
            </div>
            <input
              type="password"
              required="required"
              className="inputField"
              placeholder="•••••••••"
              name="password"
              id="password"
              value={creds?.password}
              onChange={handleChange}
            />
          </div>
          <div className="buttonContainer">
            <button
              onClick={onSignIn}
              disabled={auth.loading}
              className="submitLoginButton"
            >
              {isLogingIn ? (
                <Spinner animation="border" role="status" size="sm">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
        <div className="loginCardExtension">
          <div style={{ color: "rgba(255,255,255,0.5)" }}>
            Don't have account?
          </div>
          <a href="/signup" className="registerLink">
            Create new account
          </a>
        </div>
      </div>
    </div>
  );
};

const mapStateToProp = ({ auth }) => ({ auth });

export default connect(mapStateToProp, { signInStart })(Login);
