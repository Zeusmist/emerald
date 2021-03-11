/* eslint-disable */
/* eslint-disable */

import React, { useState } from "react";
// import Dashboard from "../user-dashboard/dashboard";
// import Account from "../account";
// import Message from '../message';
// import FarmList from '../FarmList';
// import Transactions from '../transaction/Transaction';
import "./navStyle.css";
import Routes from "../../routes/Routes";
import {Link} from "react-router-dom";
import {connect} from 'react-redux'

const NavBar = ({firstName, lastName}) => {
  const [showSide, setShowSide] = useState({
    mainSide: 3,
    mainContent: 9,
    display: "",
    inside: "80%",
  });

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
  return (
    <div>
      <div className="myNav row m-0">
      <div className="col-md-3 col-sm-12 d-flex justify-content-around" style={{backgroundColor:'#ffffff', height:'80px'}}>
      <label className="switch">
          <input
            type="checkbox"
            style={{ outline: "none" }}
            onClick={hideSide}
          />
          <span className="toggleButton"></span>
        </label>


        <p className="logo" style={{marginTop: 10}}>Dashboard</p>
        
      </div>
      <div className="col-md-9 col-sm-12 d-flex justify-content-between pt-4 readMe" style={{backgroundColor:'#ffffff', height:'80px'}}>
      
                    <div class="search">
                    <i class="fa fa-search icon2"></i>
                    <input type="text" className="input-field"/>
                    </div>
                    <div className="col-md-5 navInfo">
                        <small>Emerald Wallet: N25,000</small>

                        <small>Payout Wallet: N25,000</small>

                        <small>Savings Wallet: N25,000</small>
                    </div>
                    <a href="#" style={{ textDecoration: 'none', color: '#efadec' }}>
                        <span className="icon"><i className="fa fa-user-circle-o prof" aria-hidden="true"></i></span>
                        <span style={{ marginLeft: 5 }} className="dname">Nnamdi</span>
                    </a>
                </div>
     
      
      </div>

      <div className="contentWrap row m-0">
        <div
          className={`sideNav col-md-${
            showSide.mainSide
          } col-sm-12 d-flex justify-content-center align-item-center p-${2}`}
        >
          <div className={`innerSideNav`} style={{ width: showSide.inside }}>
            <div className="me" style={{ display: showSide.display }}></div>
            <p style={{ marginTop: 5, display: showSide.display }}>
              {firstName} {lastName}
            </p>
            <Link to="/account">
            <small style={{ display: showSide.display, color:"#41EC7B", textDecoration:"none" }}>User profile</small>
            </Link>
            <div className="navList">
              <ul>
                <li>
                  <a href="#">
                    <span className="icon">
                      <i className="fa fa-home" aria-hidden="true"></i>
                    </span>
                    <Link to="/dashboard">
                    <span className="titleList">Dashboard</span>
                    </Link>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <span className="icon">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                    <Link to="/message">
                    <span className="titleList">Messages</span>
                    </Link>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <i className="fa fa-list" aria-hidden="true"></i>
                    </span>
                    <Link to="/farmlist">
                    <span className="titleList">Farm List</span>
                    </Link>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <i className="fa fa-industry" aria-hidden="true"></i>
                    </span>
                    <Link to="/wallet">
                    <span className="titleList">Emerald Bank</span>
                    </Link>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <i className="fa fa-money" aria-hidden="true"></i>
                    </span>
                    <Link to="/transaction">
                    <span className="titleList">Transactions</span>
                    </Link>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <i className="fa fa-credit-card" aria-hidden="true"></i>
                    </span>
                    <Link to="/wallet">
                    <span className="titleList">Wallet</span>
                    </Link>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <i className="fa fa-cog" aria-hidden="true"></i>
                    </span>
                    <Link to="/profile">
                    <span className="titleList">Settings</span>
                    </Link>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <i className="fa fa-map-signs" aria-hidden="true"></i>
                    </span>
                    <Link to="/newsletter">
                    <span className="titleList">Newsletter</span>
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`content col-md-${showSide.mainContent} col-sm-12 p-3`}>
          <Routes />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state=>{
  return{
    firstName: state.auth.firstName,
    lastName: state.auth.lastName
  }
}

export default connect(mapStateToProps, null)(NavBar);
