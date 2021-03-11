import React, { useState } from "react";
import "./styles/login.css";
import { UsernameIcon, PasswordIcon } from "./svg";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/actions";

// const Socials=()=>{
//     return(
//         <div>

//         </div>
//     )
// }

function SignUp2({ closeModal, signUpStart, auth }) {
  const [creds, setCreds] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setCreds((creds) => ({ ...creds, [name]: value }));
   
  };

  const onSignUp = async (e) => {
    e.preventDefault();
    signUpStart(creds);
  };
  return (
    <div className="loginContainer">
      <div className="loginText">Register</div>
      <div className="loginCard">
        {/* <div className="welcomeText">Welcome Guest</div> */}
        <form method="#">
          <div>
            <div className="inputLabel">
              <div className="inputLabelText">First Name</div>
              {/* <UsernameIcon className="inputLabelImg" /> */}
            </div>
            <input
              className="inputField"
              type="text"
              name="firstName"
              placeholder="First Name"
              required="required"
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="inputLabel">
              <div className="inputLabelText">Last Name</div>
              {/* <UsernameIcon className="inputLabelImg" /> */}
            </div>
            <input
              className="inputField"
              type="text"
              name="lastName"
              placeholder="Last Name"
              required="required"
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="inputLabel">
              <div className="inputLabelText">Email</div>
              <UsernameIcon className="inputLabelImg" />
            </div>
            <input
              className="inputField"
              type="text"
              name="email"
              placeholder="Email"
              required="required"
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
              onChange={handleChange}
            />
          </div>
          <div>
            <div style={{ marginTop: "60px" }}>
              <div className="inputLabelText">Confirm Password</div>
              <PasswordIcon className="inputLabelImg" />
            </div>
            <input
              type="password"
              required="required"
              className="inputField2"
              name="confirmPassword"
              id="password"
              onChange={handleChange}
            />
          </div>
          <div className="buttonContainer">
            <button
              className="submitLoginButton"
              disabled={auth.loading}
              onClick={onSignUp}
            >
              Register
            </button>
          </div>
          {/* <Socials /> */}
        </form>
        <div className="loginCardExtension">
          Already have an account?
          <a href="/" className="/login">
            Login
          </a>
          <button onClick={closeModal} className="btn cancelLogin">
            close
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProp = ({ auth }) => ({ auth });

export default connect(mapStateToProp, { signUpStart })(SignUp2);
