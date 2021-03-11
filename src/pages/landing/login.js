import React, { useState } from "react";
import { connect } from "react-redux";
import "./styles/login.css";
import { UsernameIcon, PasswordIcon } from "./svg";
import { signInStart } from "../../redux/actions";
import {useHistory} from "react-router-dom";



const Login = ({ closeModal, signInStart, auth }) => {
  const history = useHistory();

  const [creds, setCreds] = useState({
    email:"",
    password:""
  });

  const handleChange = ({ target: { name, value } }) => {
    setCreds((creds) => ({ ...creds, [name]: value }));
  };

  const onSignIn = async (e) => {
    e.preventDefault();
    signInStart(
      creds, () => {
        history.push("/dashboard");
      }
    );
  };
  return (
    <div className="loginContainer">
      <div className="loginText">Login</div>
      <div className="loginCard">
        <div className="welcomeText">Welcome Guest</div>
        <form method="#">
          <div>
            <div className="inputLabel">
              <div className="inputLabelText">Username</div>
              <UsernameIcon className="inputLabelImg" />
            </div>
            <input
              className="inputField"
              type="text"
              name="email"
              placeholder="Username"
              required="required"
              value={creds?.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <div style={{ marginTop: "60px" }}>
              <div className="inputLabelText">Password</div>
              <PasswordIcon className="inputLabelImg" />
            </div>
            <input
              type="password"
              required="required"
              className="inputField2"
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
              Login
            </button>
          </div>
        </form>
        <div className="loginCardExtension">
          Don't have account?
          <a href="/" className="registerLink">
            Create new account
          </a>
          <button onClick={closeModal} className="btn cancelLogin">
            close
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProp = ({ auth }) => ({ auth });

export default connect(mapStateToProp, { signInStart })(Login);
