/* eslint-disable */
/* eslint-disable */

import React from 'react';
import './ecomStyle.css';
import { Brand } from './svgs';


const GetInTouch = ()=>{
    return(
        <>
        <div className="row m-0 myNav2">
            <div className="col-md-3 col-sm-6 brand">
                <p>Dashboard</p>
            </div>

            <div className="col-md-6 col-sm-0 p-3">
            <div className="navInfo2">
            <small>Emerald Wallet: N25,000</small>

            <small>Payout Wallet: N25,000</small>

            <small>Savings Wallet: N25,000</small>
            </div>
            </div>

            <div className="col-md-3 col-sm-6 p-3 d-flex justify-content-end profik">
            <a href="#" style={{ textDecoration: 'none', color: '#efadec' }}>
                <span className="icon"><i className="fa fa-user-circle-o" aria-hidden="true"></i></span>
                <span style={{ marginLeft: 5 }} className="dname2">Nnamdi</span>
            </a>
            </div>
        </div>



        <div className="row m-0">
            <div className="col-md-6 col-sm-12 p-5">
                <Brand/>
                <h1 className="emeraldp" style={{fontWeight:'normal'}}>Emerald Farms</h1>
                <hr style={{width: 250, color:'#41EC7B', height: 6}}></hr>
                <small className="addMed">Contacts</small><br/><br/>
                <small className="addSmall">Address</small><br/><br/>
                <small className="addSmall">Contact No</small><br/><br/>
                <small className="addSmall">Email Address</small><br/><br/>
                <small className="addSmall">Want to create an account?</small><br/><br/>   
                <small className="addSmallextra">Click here</small>
            </div>
            <div className="col-md-6 col-sm-12 p-5">
                <div className="p-3 pb-5 pt-5" style={{backgroundColor:'#EBFFF2', width:'100%'}}>
                <small className="getInTouch">Get in Touch</small><br/><br/>
                        <label for="exampleFormControlInput1" >Name</label>
                        <input type="text" class="addForm"/>
                        <label for="exampleFormControlInput1" >Email</label>
                        <input type="text" class="addForm"/>
                        <label for="exampleFormControlInput1" >Subject</label>
                        <input type="text" class="addForm"/>
                        <label for="exampleFormControlInput1" >Your message</label>
                        <textarea type="text" class="addForm"/><br/>
                        <button className="addBut">Submit</button>
                </div>
            </div>

        </div>
        </>
    )
}



export default GetInTouch;