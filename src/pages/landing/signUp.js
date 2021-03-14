import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { addUsers } from "../../redux/actions";

const SignUp = ({ addUsers }) => {
  let history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const onSignUp = async (e) => {
    e.preventDefault();
    addUsers({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    });
    history.push("/verify");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="container register-form">
      <div className="form" style={{ marginTop: 100 }}>
        <div className="note">
          <p>
            Welcome to Emerald Farm, please do sign up to enjoy all the
            benefits.
          </p>
        </div>

        <div className="form-content">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name *"
                  required="required"
                  onChange={handleFirstName}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name *"
                  required="required"
                  onChange={handleLastName}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email *"
                  required="required"
                  onChange={handleEmail}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Password *"
                  required="required"
                  onChange={handlePassword}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Confirm Password *"
                  required="required"
                  onChange={handleConfirmPassword}
                />
              </div>
            </div>
          </div>
          <button type="button" className="btnSubmit" onClick={onSignUp}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addUsers })(SignUp);
