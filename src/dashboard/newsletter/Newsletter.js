import React from 'react';
import { Cow, Invest, Transact } from '../../ecommerce/svgs';

const NewsLetter = ()=>{
    return(
      <div className="col-md-12 p-3" style={{ height: "100%" }}>
          <button className="newsLetterBut">News Update (13)</button>
          <div className="row mt-4 p-2" style={{backgroundColor:'#fff'}}>
              <div className="col-md-4 col-sm-12 d-flex justify-content-center pb-2">
                  <div className="sliderDiv">
                    <div className="newsCircle">
                    <Cow/>          
                    </div>
                    <div>
                       <span><h2>Cattle Farm 18%<small style={{visibility:'hidden'}}>.....</small>  <small>ROI</small></h2></span>
                    </div>
                    <div>
                       <button className="newsBut">READ MORE</button>
                    </div>
                  </div>
              </div>
              <div className="col-md-4 col-sm-12 d-flex justify-content-center pb-2">
              <div className="sliderDiv">
              <div className="newsCircle">
              <Cow/>          
                        </div>
                        <div>
                           <span><h2>Cattle Farm 18%<small style={{visibility:'hidden'}}>.....</small>  <small>ROI</small></h2></span>
                        </div>
                        <div>
                           <button className="newsBut">READ MORE</button>
                        </div>
              </div>
              </div>
              <div className="col-md-4 col-sm-12 d-flex justify-content-center">
              <div className="sliderDiv">
              <div className="newsCircle">
                    <Cow/>          
                        </div>
                        <div>
                           <span><h2>Cattle Farm 18%<small style={{visibility:'hidden'}}>.....</small>  <small>ROI</small></h2></span>
                        </div>
                        <div>
                           <button className="newsBut">READ MORE</button>
                        </div>
              </div>
              </div>
          </div>

          

          <div className="row m-0 mt-3">
        <div className="col-md-6 col-sm-12">
            <div className="totalInvestment p-3">
            <div className="tInvest">
                <Transact/>
            </div>
                <p className="pInvest">Total investments</p>
                <p className="pMoney">₦89,000.00</p>
            </div>
        </div>
        <div className="col-md-6 col-sm-12">
        <div className="totalInvestment2 p-3">
            <div className="tInvest">
                <Invest/>
            </div>
                <p className="pInvest2">Active investments</p>
                <p className="pMoney2">₦89,000.00</p>
        </div>
        </div>
    </div>
      </div>
    )
}



export default NewsLetter;