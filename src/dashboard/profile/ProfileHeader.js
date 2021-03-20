import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { Farmer } from "../account/svg";

const tabs = [
  { name: "Profile", href: "/profile" },
  { name: "Next of kin", href: "/nextofkin", type: "user" },
  { name: "Bank Details", href: "/bankdetails", type: "user" },
  { name: "Change Password", href: "/change-password" },
];

const Tab = ({ tab, pathname, onClick }) => {
  const isActive = pathname == tab.href;
  return (
    <button
      type="button"
      className="butGroup col-md-3 col-sm-3"
      onClick={onClick}
      style={{
        backgroundColor: isActive ? "#FFF" : "inherit",
        height: "initial",
      }}
    >
      {tab.name}
    </button>
  );
};

class ProfileHeader extends PureComponent {
  handleTabNavigation = (href) => this.props.history.push(href);
  render() {
    const { name, email, location, role } = this.props;
    return (
      <div>
        <div className="row col-md-12 d-flex justify-content-center">
          {tabs
            .filter((tab) =>
              role == "admin" || role == "superadmin"
                ? tab?.type != "user"
                : true
            )
            .map((tab, i) => (
              <Tab
                tab={tab}
                pathname={location.pathname}
                onClick={() => this.handleTabNavigation(tab.href)}
              />
            ))}
        </div>
        <div className="col-md-12 d-flex justify-content-center mt-3">
          <div
            className="meProfile"
            style={{
              display: "",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <Farmer />
            </div>
          </div>
        </div>
        <p
          className="col-md-12 text-center"
          style={{ fontWeight: "bold", fontSize: "20px", padding: "5px" }}
        >
          {name}
          <br />
          <small className="col-md-12 d-flex justify-content-center">
            {email}
          </small>
        </p>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    name: state?.auth?.firstName + " " + state?.auth?.lastName,
    email: state?.auth?.email,
    role: state?.auth?.role,
  };
};

export default compose(withRouter, connect(mapState))(ProfileHeader);
