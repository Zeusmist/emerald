import React from 'react';


const UserProfile = ()=>{
    return(
        <>
        <div className='row m-0'>
        <div className='col-md-6 col-sm-12'>
        <small className='userProfile'>User Profile</small>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', paddingTop: 20}}>
            <div style={{width: 100, height: 100, backgroundColor: 'red', borderRadius: 100}}>

            </div>
        </div>
        <small className='personalProfile'>Personal Profile</small>
        {/* {start of form input} */}
        <div className='p-2'>
            <div style={{display:'flex', flexDirection: 'row', justifyContent:'space-around', paddingBottom: 20}}>
            <input type="text" class="myshortform"/>
            <input type="text" class="myshortform"/>
            </div>
            <div style={{display:'flex', flexDirection: 'row', justifyContent:'center', paddingBottom: 15}}>
            <input type="text" className="myForm"/>
            </div>
            <div style={{display:'flex', flexDirection: 'row', justifyContent:'center', paddingBottom: 15}}>
            <input type="text" className="myForm"/>
            </div>
            <div style={{display:'flex', flexDirection: 'row', justifyContent:'center', paddingBottom: 15}}>
            <input type="text" className="myForm"/>
            </div>
        </div>
        <small className='personalProfile'>Next of Kin</small>
        <div className='p-2'>
            <div style={{display:'flex', flexDirection: 'row', justifyContent:'space-around', paddingBottom: 20}}>
            <input type="text" class="myshortform"/>
            <input type="text" class="myshortform"/>
            </div>
            <div style={{display:'flex', flexDirection: 'row', justifyContent:'center', paddingBottom: 15}}>
            <input type="text" className="myForm"/>
            </div>
            <div style={{display:'flex', flexDirection: 'row', justifyContent:'center', paddingBottom: 15}}>
            <input type="text" className="myForm"/>
            </div>
            <div style={{display:'flex', flexDirection: 'row', justifyContent:'center', paddingBottom: 15}}>
            <input type="text" className="myForm"/>
            </div>
        </div>
        </div>
        <div className='col-md-6 col-sm-12' style={{backgroundColor:'#fff'}}>
            <small className='bankdetails'>Bank Details</small>
            <small className='gtbank'>GT Bank 0237984950</small>
            <small className='prim'>Primary</small>
            <br/><br/>
            <small className='gtbank'>GT Bank 0237984950</small>
            <small className='prim'>Primary</small>
            <br/><br/><br/>
            <small className='walFund'>Wallet Funding</small>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
            <button className='wallBut'>Fund Wallet</button><br/>
            <button className='wallBut'>Withdraw Funds</button><br/>
            <button className='wallBut'>Transfer</button>
            </div>
            
            <br/><br/><br/>
            <small className='viewInvest'>View Investment History</small>
        </div>
        </div>
        </>
    )
}


export default UserProfile;