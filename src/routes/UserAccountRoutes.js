/* eslint-disable */

import React from "react";
import { Route } from "react-router-dom";
import {
  ChangePassword,
  PaymentMethod,
  Cards,
  Bank,
  Biometric,
  Profile
} from "../dashboard/account/components";
import HistoryInvest from "../dashboard/account/components/investmentHistory";
// import Profile from "../dashboard/account/components/profile";

const RoutesNew = () => {
  return (
    <>
      <Route path="/user/profile" component={Profile} />
      <Route path="/user/change-password" component={ChangePassword} />
      <Route path ="/user/payment-methods" component={PaymentMethod} />
      <Route path ="/user/bank-details" component={Bank} />
      <Route path ="/user/biometrics" component={Biometric} />
      {/* <Route path="/user/history" component={InvestmentHistory}/> */}
      <Route path ="/user/investment-history" component={HistoryInvest} />

    </>
  );
};

export default RoutesNew;
