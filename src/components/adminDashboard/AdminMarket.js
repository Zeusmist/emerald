/* eslint-disable */
/* eslint-disable */

import React from 'react';
import {ArrowRight, AddBuyers, BuyingRequest, Shield, PassMark, Bolt, ShieldDot, Transact, Invest} from '../../ecommerce/svgs'
import Calendar from '../images/calendar.png';
import Graph from '../images/graph.png'

const AdminMarket = ()=>{
    return(
        <>
     
         <small className="superAdminText">Super Admin Dashboard</small>
         <div className="SuperAdmindWallet">
          <button className='superAdminFundButt'>Fund Wallet</button>
         <div className='superAdminTabMenu'>
            <span className='superAdminTabsOne'><small className='superAdminTabText'>Day</small></span>
            <span className='superAdminTabsTwo'><small className='superAdminTabText'>Week</small></span>
            <span className='superAdminTabsTwo'><small className='superAdminTabText'>Month</small></span>
            <span className='superAdminTabsThree'><small className='superAdminTabText'>Month</small></span>
         </div>
         <button className='exportButt'><i className="fa fa-download" aria-hidden="true"></i><small style={{marginLeft: 20}}>Export</small></button>
         </div>

         <div className='row m-0 pt-5 pb-3'>
          <div className='col-md-3 col-sm-12 pb-2'>
            <div style={{width:'100%', backgroundColor:'#fff', borderRadius: 20, border:'0.5px solid rgba(65, 236, 123, 0.4)'}}>
            <div style={{padding:15, borderBottom:'0.5px solid rgba(65, 236, 123, 0.4)'}}>
                <small className='superAdminFarm'>New Farms</small><br/>
                <small className='superAdminPrice'>N96, 200.00</small>
            </div>
            <div style={{padding:15, borderBottom:'0.5px solid rgba(65, 236, 123, 0.4)'}}>
                <small className='superAdminFarm'>New Farms</small><br/>
                <small className='superAdminPrice'>N96, 200.00</small>
            </div>
            <div style={{padding:15, borderBottom:'0.5px solid rgba(65, 236, 123, 0.4)'}}>
                <small className='superAdminFarm'>New Farms</small><br/>
                <small className='superAdminPrice'>N96, 200.00</small>
            </div>
            <div style={{padding:25}}>
                <small className='superAdminFarm'>New Farms</small><br/>
                <small className='superAdminPrice'>N96, 200.00</small>
            </div>
            </div>
          </div>
          <div className='col-md-9 col-sm-12'>
            <div style={{width:'100%', backgroundColor:'#fff', paddingLeft: 15, paddingBottom: 15}} className='superAdminAddFarm'>
                <div className='d-flex justify-content-center'>
                <small className='col-md-12 text-center'>Items on sale</small>
                </div>
                <div className='showBuyer'>
                <div style={{width: 130, height: 300,display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-evenly'}}>
                    <div style={{width: 90, height: 100, border:'0.5px solid #41EC7B', borderRadius: 5}}></div>
                    <small>Cattle</small>
                    <small>N50, 000 per unit</small>
                    <small>Total Units: 3000</small>
                    <small>Available Units: 1820</small>
                    <button className='superAdminBuyer'>Buyers <ArrowRight/></button>
                  </div>

                <div style={{width: 130, height: 300,display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-evenly'}}>
                    <div style={{width: 90, height: 100, border:'0.5px solid #41EC7B', borderRadius: 5}}></div>
                    <small>Cattle</small>
                    <small>N50, 000 per unit</small>
                    <small>Total Units: 3000</small>
                    <small>Available Units: 1820</small>
                    <button className='superAdminBuyer'>Buyers <ArrowRight/></button>
                </div>

                <div style={{width: 130, height: 300,display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-evenly'}}>
                    <div style={{width: 90, height: 100, border:'0.5px solid #41EC7B', borderRadius: 5}}></div>
                    <small>Cattle</small>
                    <small>N50, 000 per unit</small>
                    <small>Total Units: 3000</small>
                    <small>Available Units: 1820</small>
                    <button className='superAdminBuyer'>Buyers <ArrowRight/></button>
                </div>

                <div style={{width: 130, height: 300,display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-evenly'}}>
                    <div style={{width: 90, height: 100, border:'0.5px solid #41EC7B', borderRadius: 5}}></div>
                    <small>Cattle</small>
                    <small>N50, 000 per unit</small>
                    <small>Total Units: 3000</small>
                    <small>Available Units: 1820</small>
                    <button className='superAdminBuyer'>Buyers <ArrowRight/></button>
                </div>

                <div style={{width: 130, height: 300,display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-evenly'}}>
                    <div style={{width: 90, height: 100, border:'0.5px solid #41EC7B', borderRadius: 5}}></div>
                    <small>Cattle</small>
                    <small>N50, 000 per unit</small>
                    <small>Total Units: 3000</small>
                    <small>Available Units: 1820</small>
                    <button className='superAdminBuyer'>Buyers <ArrowRight/></button>
                </div>

                <div className='addBuyers'>
                  <div>
                  <AddBuyers/><br/>
                   <small className='addNewItem'>Add <br/>New Item</small>
                  </div>
                  <div>
                  <BuyingRequest/><br/>
                   <small className='addNewItem'>Add <br/>New Item</small>
                  </div>   
                </div> 
                </div>                
            </div>
          </div>
         </div>
         {/* {start of combined wallet div} */}

         <div className='row m-0 pt-5 pb-3'>
          <div className='col-md-3 col-sm-12 pb-2'>
            <div style={{width:'100%', backgroundColor:'#fff', borderRadius: 20, border:'0.5px solid rgba(65, 236, 123, 0.4)'}}>
            <div style={{padding:15, borderBottom:'0.5px solid rgba(65, 236, 123, 0.4)'}}>
                <small className='superAdminFarm'>Combined Wallet
                  Value</small><Shield/><br/>
                <small className='superAdminPrice'>N96, 200.00</small>
            </div>
            <div style={{padding:15, borderBottom:'0.5px solid rgba(65, 236, 123, 0.4)'}}>
                <small className='superAdminFarm'>Emerald Wallet</small><PassMark/><br/>
                <small className='superAdminPrice'>N96, 200.00</small>
            </div>
            <div style={{padding:15, borderBottom:'0.5px solid rgba(65, 236, 123, 0.4)'}}>
                <small className='superAdminFarm'>Payout Wallets</small><Bolt/><br/>
                <small className='superAdminPrice'>N96, 200.00</small>
            </div>
            <div style={{padding:25}}>
                <small className='superAdminFarm'>Savings Wallet</small><ShieldDot/><br/>
                <small className='superAdminPrice'>N96, 200.00</small>
            </div>
            </div>
          </div>
          <div className='col-md-9 col-sm-12'>
            <div style={{width:'100%', backgroundColor:'#fff', paddingLeft: 15, paddingBottom: 15}} className='superAdminAddFarm'>
                <div className='d-flex justify-content-center'>
                <small className='col-md-12 text-center'>Farm Sales Revenue</small>
                </div>
                <div className='showBuyer'>
                <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-evenly'}}>
                    {/* <div style={{width: 90, height: 100, border:'0.5px solid #41EC7B', borderRadius: 5}}></div> */}
                    <img src={Graph} width='100%'/>
                </div>      
 
                </div>                
            </div>
          </div>
         </div>

         {/* {start of calendar div} */}
         <div style={{width:'100%'}}>
            <img src={Calendar} height='380' width='100%'/>
        </div> 

        {/* {start of pie chart} */}
         
        <div className='row m-0 p-3' style={{width:'100%', backgroundColor:'#fff'}}>
            <div className='col-md-6 col-sm-12' style={{backgroundColor:'yellow'}}>

            </div>
           
            <div className="col-md-6 col-sm-12">
            <div className="totalInvestment p-3" style={{border:'0.5px solid grey'}}>
            <div className="tInvest">
                <Transact/>
            </div>
                <p className="pInvest">Total investments</p>
                <p className="pMoney">₦89,000.00</p>
            </div>
              <br/>
            <div className="totalInvestment2 p-3">
            <div className="tInvest">
                <Invest/>
            </div>
                <p className="pInvest2">Active investments</p>
                <p className="pMoney2">₦89,000.00</p>
        </div>
        </div>
        </div> 
        </>
    )
}


export default AdminMarket;