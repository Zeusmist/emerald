import React from 'react';
import './navbar/navStyle.css'

const Dashboard = ()=>{
    return(
        <div className="dashboard col-md-12" style={{height: '100%'}}>
            <div className="dashtitle">
            
            </div>

            <div className="dashStat mt-4 row d-flex justify-content-around m-0">
                <div className="col-md-3 col-sm-6 p-2">
                    <div className='infoCard p-1'>
                        <div><p>hello world</p></div>
                        <div style={{width: 100, height: 100, backgroundColor: 'green', borderRadius: 100}}></div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 p-2">
                <div className='infoCard p-1'>
                <div><p>hello world</p></div>
                <div style={{width: 100, height: 100, backgroundColor: 'green', borderRadius: 100}}></div>
                </div>
                </div>
                <div className="col-md-3 col-sm-6  p-2">
                <div className='infoCard p-1'>
                <div><p>hello world</p></div>
                <div style={{width: 100, height: 100, backgroundColor: 'green', borderRadius: 100}}></div>
                </div>
                </div>
                <div className="col-md-3 col-sm-6 p-2">
                <div className='infoCard p-1'>
                <div><p>hello world</p></div>
                <div style={{width: 100, height: 100, backgroundColor: 'green', borderRadius: 100}}></div>
                </div>
                </div>
            </div>

            <div className="dashTrans mt-4">
                
            </div>
        </div>
    )
}

export default Dashboard;