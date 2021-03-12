/* eslint-disable */
import React from "react";
import { ReactComponent as BackArrow } from "../svg/backArrow.svg";
import Button from "../../../components/Button";
import {Link} from "react-router-dom";


import "../styles/index.css";

const HistoryInvest = () => {
  return (
    <div className="dashboard__holder">
      {/* <BackArrow /> */}
    

      <div className="dashboard__card--cardItem__holder">
        <div className="dashboard__card--bankItem ">
          <span className="main">Investment History</span><br/><br/>
          
        </div>
      </div>
      <div className="dashboard__card__add-button">
       <span>Click Button to view History</span>
      </div><br/><br/>
      <div className="dashboard__card__button">
          <Link to="/investmenthistory">
        <Button
          border="1px solid #979797"
          text="View"
          main="#9DCC6B"
          sub="#000"
        /></Link>
      </div>
    </div>
  );
};

export default HistoryInvest;
