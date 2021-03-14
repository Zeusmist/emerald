import React from 'react';
import {Route} from 'react-router-dom';
import AdminFarmList from '../AdminFarmList';
import AdminMarket from '../AdminMarket';
import AdminMessage from '../AdminMessage';
import Admins from '../Admins';
import BookFarm from '../BookFarm';
import InvestmentHistory from '../InvestmentHistory';
import UserProfile from '../UserProfile';
import AdminUsers from '../Users';


const SubRoutes = ()=>{
    return(
        <>
        <Route path='/adminmessage' component={AdminMessage}/>
        <Route path='/adminusers' component={AdminUsers}/>
        <Route path='/admins' component={Admins}/>
        <Route path='/userprofile' component={UserProfile}/>
        <Route path='/investmenthistory' component={InvestmentHistory}/>
        <Route path='/bookfarm' component={BookFarm}/>
        <Route path='/adminmarket' component={AdminMarket}/>
        <Route path='/adminfarmlist' component={AdminFarmList}/>
        </>
    )
}


export default SubRoutes;