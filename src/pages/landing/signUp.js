import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { addUsers } from "../../redux/actions";
import { Spinner } from "react-bootstrap";

const SignUp = ({ addUsers }) => {
  let history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

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
    setIsRegistering(true);
    addUsers(
      {
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      },
      () => {
        history.push("/verify");
        setFirstName("");
        setLastName("");
        setUserName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      },
      () => {
        setIsRegistering(false);
      }
    );
  };

  return (
    <div className="container register-form">
      <div className="form" style={{ padding: "2% 0" }}>
        <div className="note">
          <p>
            Welcome to Emerald Farm, please do sign up to enjoy all the
            benefits.
          </p>
        </div>

        <div className="form-content">
          <form className="row">
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
              {/* <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username *"
                  required="required"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div> */}

              <div className="form-group">
                <input
                  type="email"
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
                  type="password"
                  className="form-control"
                  placeholder="Your Password *"
                  required="required"
                  onChange={handlePassword}
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password *"
                  required="required"
                  onChange={handleConfirmPassword}
                />
              </div>
            </div>
          </form>
          <button type="submit" className="btnSubmit" onClick={onSignUp}>
            {isRegistering ? (
              <Spinner animation="border" role="status" size="sm">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (
              "Register"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addUsers })(SignUp);
