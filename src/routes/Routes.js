import React from "react";
import { Route } from "react-router-dom";
import FarmList from "../dashboard/FarmList";
import Message from "../dashboard/message";
import NewsLetter from "../dashboard/newsletter/Newsletter";
import ReadMore from "../dashboard/newsletter/ReadMore";
import BankDetails from "../dashboard/profile/BankDetails";
import ChangePassword from "../dashboard/account/components/changePassword";
import NextOfKin from "../dashboard/profile/NextOfKin";
import Profile from "../dashboard/profile/Profile";
import Transactions from "../dashboard/transaction/Transaction";
import Wallet from "../dashboard/wallet/Wallet";
// import Dashboard from "../dashboard/user-dashboard/dashboard";
import Dashboard from "../dashboard/user-dashboard";
import Investment from "../dashboard/transaction/Investment";
import Payout from "../dashboard/transaction/Payouts";
import Deposit from "../dashboard/transaction/Deposit";
import Account from "../dashboard/account";

import AdminDashboard from "../components/adminDashboard";
import Admins from "../components/adminDashboard/Admins";
import BookFarm from "../components/adminDashboard/BookFarm";
import InvestmentHistory from "../components/adminDashboard/InvestmentHistory";
import UserProfile from "../components/adminDashboard/UserProfile";
import AdminUsers from "../components/adminDashboard/Users";
import AdminFarmList from "../components/adminDashboard/AdminFarmList";
import { connect } from "react-redux";

const Routes = connect((state) => ({ role: state.auth?.role }))(({ role }) => {
  return (
    <>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/message" component={Message} />
      <Route path="/farmlist" component={FarmList} />
      <Route path="/transaction" component={Transactions} />
      <Route path="/wallet" component={Wallet} />
      <Route path="/profile" component={Profile} />
      <Route path="/nextofkin" component={NextOfKin} />
      <Route path="/bankdetails" component={BankDetails} />
      <Route path="/change-password" component={ChangePassword} />
      <Route path="/newsletter" component={NewsLetter} />
      <Route path="/readmore" component={ReadMore} />
      <Route path="/investment" component={Investment} />
      <Route path="/payout" component={Payout} />
      <Route path="/deposit" component={Deposit} />
      <Route path="/account" component={Account} />
      {(role == "superadmin" || role == "admin") && (
        <>
          <Route path="/admindashboard" component={AdminDashboard} />
          <Route path="/admins" component={Admins} />
          <Route path="/adminusers" component={AdminUsers} />
          <Route path="/userprofile" component={UserProfile} />
          <Route path="/investmenthistory" component={InvestmentHistory} />
          <Route path="/bookfarm" component={BookFarm} />
          <Route path="/adminfarmlist" component={AdminFarmList} />
        </>
      )}

      <Route path="/user/profile">
        <Account />
      </Route>
      <Route path="/user/profile">
        <Account />
      </Route>
      <Route path="/user/payment-methods">
        <Account />
      </Route>
      <Route path="/user/bank-details">
        <Account />
      </Route>
      <Route path="/user/change-password">
        <Account />
      </Route>
      <Route path="/user/biometrics">
        <Account />
      </Route>
      <Route path="/user/investment-history">
        <Account />
      </Route>

      {/* <Route path="" */}
    </>
  );
});

export default Routes;
