import React from 'react';
import {Route} from 'react-router-dom';
import FarmList from '../dashboard/FarmList';
import Message from '../dashboard/message';
import NewsLetter from '../dashboard/newsletter/Newsletter';
import ReadMore from '../dashboard/newsletter/ReadMore';
import BankDetails from '../dashboard/profile/BankDetails';
import NextOfKin from '../dashboard/profile/NextOfKin';
import Profile from '../dashboard/profile/Profile';
import Transactions from '../dashboard/transaction/Transaction';
import Wallet from '../dashboard/wallet/Wallet';
import Dashboard from "../dashboard/user-dashboard/dashboard";
import Investment from '../dashboard/transaction/Investment';
import Payout from '../dashboard/transaction/Payouts';
import Deposit from '../dashboard/transaction/Deposit';
// import Account from "../dashboard/account";


const Routes = ()=>{
    return(
        <>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/message" component={Message}/>
            <Route path="/farmlist" component={FarmList}/>
            <Route path="/transaction" component={Transactions}/>
            <Route path="/wallet" component={Wallet}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/nextofkin" component={NextOfKin}/>
            <Route path="/bankdetails" component={BankDetails}/>
            <Route path="/newsletter" component={NewsLetter}/>
            <Route path="/readmore" component={ReadMore}/>
            <Route path="/investment" component={Investment}/>
            <Route path="/payout" component={Payout}/>
            <Route path="/deposit" component={Deposit}/>
            {/* <Route  path="/account" component={Account} /> */}
           
            {/* <Route path="" */}
        </>
    )
}



export default Routes;