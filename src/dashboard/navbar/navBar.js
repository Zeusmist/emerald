/* eslint-disable */
/* eslint-disable */

import React, { useState, useEffect } from "react";
// import Dashboard from "../user-dashboard/dashboard";
// import Account from "../account";
// import Message from '../message';
// import FarmList from '../FarmList';
// import Transactions from '../transaction/Transaction';
import "./navStyle.css";
import Routes from "../../routes/Routes";
import { Link, useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import {
  getWallets,
  toggleModal,
  updateAuth,
  getBanks,
} from "../../redux/actions";
import { Modal } from "react-bootstrap";
import FundWallet from "../../components/payments/FundWallet";
import FlutterWave from "../../components/payments/FlutterWave";
import { Farmer } from "../account/svg";
import { baseUrl } from "../../config";
import { toast } from "react-toastify";

const NavBar = ({
  firstName,
  lastName,
  id,
  token,
  role,
  getWallets,
  wallets = [],
  modalIsOpen,
  toggleModal,
  updateAuth,
  getBanks,
}) => {
  const location = useLocation();
  const history = useHistory();

  const logout = async () => {
    updateAuth({ changes: { token: null } });
    await fetch(`${baseUrl}/api/v1/users/logout`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.code == 200) {
          history.push("/");
          toast.success(data?.message);
        } else {
          toast.error(data?.message);
        }
      });
  };

  const [showSide, setShowSide] = useState({
    mainSide: 3,
    mainContent: 9,
    display: "",
    inside: "80%",
  });

  const [sideMenuOptions, setSideMenuOptions] = useState([
    {
      name: "Dashboard",
      href: "/dashboard",
      iconClass: "fa-home",
      role: "user",
    },
    {
      name: "Dashboard",
      href: "/admindashboard",
      iconClass: "fa-home",
      role: "admin",
    },
    {
      name: "Admins",
      href: "/admins",
      role: "admin",
      iconClass: "fa-user",
    },
    {
      name: "Users",
      href: "/adminusers",
      role: "admin",
      iconClass: "fa-users",
    },
    { name: "Messages", href: "/message", iconClass: "fa-envelope" },
    {
      name: "Farm List",
      href: "/farmlist",
      iconClass: "fa-list",
      role: "user",
    },
    {
      name: "Farm List",
      href: "/bookfarm",
      iconClass: "fa-list",
      role: "admin",
    },
    {
      name: "Emerald Bank",
      href: "/wallet",
      iconClass: "fa-industry",
      role: "user",
    },
    { name: "Settings", href: "/profile", iconClass: "fa-cog" },
    { name: "Newsletter", href: "/newsletter", iconClass: "fa-map-signs" },
    { name: "Logout", iconClass: "fa-sign-out", onClick: logout },
  ]);

  useEffect(() => {
    getWallets(token);
    getBanks(token);
  }, []);

  console.log({ wallets });
  console.log("ID:::::::::::::::::", id);

  const hideSide = (e) => {
    if (e.target.checked) {
      setShowSide((prevState) => ({
        ...prevState,
        mainSide: 1,
        mainContent: 11,
        display: "none",
        inside: "65%",
      }));
    } else {
      setShowSide((prevState) => ({
        ...prevState,
        mainSide: 3,
        mainContent: 9,
        display: "",
        inside: "80%",
      }));
    }
  };

  const closeModal = () => {
    toggleModal({ modal: "userboard", isOpen: false });
  };
  return (
    <div>
      <div className="myNav row m-0">
        <div
          className="col-md-3 col-sm-12 d-flex justify-content-around"
          style={{
            backgroundColor: "#ffffff",
            height: "80px",
            alignItems: "center",
          }}
        >
          <label className="switch">
            <input
              type="checkbox"
              style={{ outline: "none" }}
              onClick={hideSide}
            />
            <span
              className={`toggleButton ${
                showSide.mainSide == 1 ? " closed" : " opened"
              }`}
            ></span>
          </label>

          <h5 className="logo" style={{ margin: 0 }}>
            Dashboard
          </h5>
        </div>
        <div
          className="col-md-9 col-sm-12 d-flex justify-content-between readMe"
          style={{
            backgroundColor: "#ffffff",
            height: "80px",
            alignItems: "center",
          }}
        >
          <div class="search">
            <i class="fa fa-search icon2"></i>
            <input type="text" className="input-field" />
          </div>
          <div className="col-md-5 navInfo">
            {wallets.map((wallet, i) => (
              <small key={i}>
                {wallet?.type} wallet:{" "}
                <div style={{ fontWeight: "bold" }}>
                  ₦
                  {(wallet?.balance)
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                </div>
              </small>
            ))}
          </div>
          <div
            href="#"
            className="user"
            style={{ textDecoration: "none", color: "#efadec" }}
          >
            <span className="icon">
              <i className="fa fa-user-circle-o prof" aria-hidden="true"></i>
            </span>
            <span style={{ marginLeft: 5 }} className="dname">
              {firstName}
            </span>
          </div>
        </div>
      </div>

      <div className="contentWrap row m-0" style={{ minHeight: "100vh" }}>
        <div
          className={`sideNav col-md-${
            showSide.mainSide
          } col-sm-12 d-flex justify-content-center align-item-center p-${2}`}
        >
          <div className={`innerSideNav`} style={{ width: showSide.inside }}>
            {location.pathname == "/profile" ||
            location.pathname == "/nextofkin" ||
            location.pathname == "/bankdetails" ||
            location.pathname == "/change-password" ? null : (
              <>
                <div
                  className="me"
                  style={{
                    display: showSide.display == "" ? "flex" : "none",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Farmer />
                </div>
                <p
                  style={{
                    display: showSide.display,
                    padding: 0,
                    margin: 0,
                    fontSize: "20px",
                  }}
                >
                  {firstName} {lastName}
                </p>
                <div style={{ marginBottom: "50px" }}>
                  <small
                    style={{
                      display: showSide.display,
                      color: "#41EC7B",
                      textDecoration: "none",
                    }}
                  >
                    {role == "superadmin"
                      ? "Super Admin"
                      : role == "admin"
                      ? "Admin"
                      : "User"}
                  </small>
                </div>
              </>
            )}
            {/* <Link to="/account" style={{ marginBottom: "50px" }}> */}
            <div className="navList">
              <ul style={{ padding: 0 }}>
                {sideMenuOptions
                  .filter(
                    (option, i) =>
                      role != "admin" && role != "superadmin" // User not an admin
                        ? option.role != "admin" // Display all where role != admin
                        : option.role != "user" //else dislay all where role != user
                  )
                  .map((option, i) => {
                    const isSelected = location.pathname == option.href;
                    return (
                      <li
                        key={i}
                        className={`${isSelected ? "selectedNav" : ""}`}
                      >
                        <Link
                          to={option?.href}
                          style={{
                            justifyContent:
                              showSide.mainSide == 1 ? "center" : "flex-start",
                          }}
                          onClick={option.onClick ? option.onClick : () => {}}
                        >
                          <span
                            className="icon"
                            style={{
                              minWidth:
                                showSide.mainSide == 1 ? "auto" : "60px",
                            }}
                          >
                            <i
                              className={`fa ${option.iconClass}`}
                              aria-hidden="true"
                            ></i>
                          </span>
                          <span
                            className="titleList"
                            style={{
                              display:
                                showSide.mainSide == 1 ? "none" : "inherit",
                            }}
                          >
                            {option.name}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>

        <div className={`content col-md-${showSide.mainContent} col-sm-12 p-3`}>
          <Routes />
          <Modal show={modalIsOpen} onHide={closeModal}>
            <Modal.Body
              className="modalBody"
              style={{ backgroundColor: "#FFF" }}
            >
              <FundWallet />
            </Modal.Body>
          </Modal>
          {/* {modalIsOpen && (
            <FlutterWave
              amount={1000}
              title="aaaa"
              description="dndmd dsnfndd"
            />
          )} */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log({ modals: state.modals });
  return {
    firstName: state.auth.firstName,
    lastName: state.auth.lastName,
    id: state.auth.id,
    token: state.auth.token,
    wallets: state?.user?.wallets,
    modalIsOpen: state?.modals?.userboard?.isOpen,
    role: state.auth?.role,
    // paymentAmount:,
    // paymentTitle:,
    // paymentDescription:,
  };
};

export default connect(mapStateToProps, {
  getWallets,
  toggleModal,
  updateAuth,
  getBanks,
})(NavBar);
