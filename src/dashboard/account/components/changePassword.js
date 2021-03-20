/*eslint-disable*/

import React, { PureComponent } from "react";
import Button from "../../../components/Button";
import "../../navbar/navStyle.css";
import "../styles/index.css";
import ProfileHeader from "../../profile/ProfileHeader";
import { toast } from "react-toastify";
import Spinner from "../../../components/Spinner";
import { connect } from "react-redux";
import { baseUrl } from "../../../config";

const fields = [
  { name: "Old Password", state: "oldPassword" },
  { name: "New Password", state: "password" },
  { name: "Re-type New Password", state: "confirmPassword" },
];

class ChangePassword extends PureComponent {
  constructor(props) {
    super(props);
    this.initialUserData = {
      oldPassword: "",
      password: "",
      confirmPassword: "",
    };
    this.state = {
      isUpdating: false,
      userData: { ...this.initialUserData },
    };
  }

  checkFieldChanges = () => {
    let changes = {};
    for (const field in { ...this.state.userData }) {
      if (this.state.userData[field] != this.initialUserData[field]) {
        changes[field] = this.state.userData[field];
      }
    }
    console.log("changes", changes);
    return changes;
  };

  handleSaveChanges = () => {
    this.setState({ isUpdating: true }, async () => {
      const { oldPassword, password, confirmPassword } = this.state.userData;
      const { currentPassword, token, email } = this.props;
      const changes = this.checkFieldChanges();
      if (Object.keys(changes).length < 3) {
        toast.info("Cannot submit empty field");
        this.setState({ isUpdating: false });
        return;
      }
      if (oldPassword != currentPassword) {
        toast.error("Your old password is incorrect");
        this.setState({ isUpdating: false });
        return;
      }
      if (password != confirmPassword) {
        toast.error("confirm password is different from new password");
        this.setState({ isUpdating: false });
        return;
      }
      await fetch(`${baseUrl}/api/v1/users/resetPassword`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, confirmPassword }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Data from resetPasword", data);
          if (data?.code == 200) {
            toast.success(data?.message);
            this.setState({
              oldPassword: "",
              password: "",
              confirmPassword: "",
            });
          } else {
            toast.error(data?.message);
          }
        });

      // await await resetPassword({ token, changes });
      this.setState({ isUpdating: false });
    });
  };

  handleChangeField = (state, value) => {
    this.setState({
      ...this.state,
      userData: { ...this.state.userData, [state]: value },
    });
  };

  render() {
    const { isUpdating } = this.state;
    return (
      <div className="dashboard__holder">
        {/* <BackArrow /> */}
        <ProfileHeader />
        <div className="formCard" style={{ alignItems: "flex-start" }}>
          {fields.map((field, i) => (
            <div>
              <label className="formLabel" for="exampleFormControlInput1">
                {field.name}
              </label>
              <input
                type="password"
                class="form-control"
                onChange={(e) =>
                  this.handleChangeField(field.state, e.target.value)
                }
                value={this.state.userData[field.state]}
              />
            </div>
          ))}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              // width: 300,
            }}
          >
            <span>
              <button
                className="formBut1"
                onClick={this.handleSaveChanges}
                disabled={isUpdating}
                style={{ width: "initial", padding: "10px" }}
              >
                {isUpdating ? <Spinner size="sm" /> : "Update Password"}
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    token: state.auth?.token,
    currentPassword: state.auth?.password,
    email: state.auth?.email,
  };
};

export default connect(mapState)(ChangePassword);
