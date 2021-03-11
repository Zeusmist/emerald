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
import Account from "../dashboard/account";
import Register from '../../src/pages/landing/register';



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
            <Route  path="/account" component={Account} />
           
            {/* <Route path="" */}
        </>
    )
}



export default Routes;