import React from 'react';
import { Transact, Cow, Invest } from '../../ecommerce/svgs';

const ReadMore = ()=>{
    return(
        <div className="p-2" style={{height: "100%", backgroundColor:'#ffffff' }}>
            <div className="displayCircle">
            <div className="readCircle">
                <Cow/>
            </div>
            <div>
            <p className="readmoreText">Cattle Farm<small className="readmoreSmall">18%</small><small className="readmoreextrasmall"> ROI</small></p>
            <p className="readmoreText2">₦120,000.00</p>
            </div>
            </div>

            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis fermentum tortor, diam nibh morbi nibh tincidunt nibh. Non eget nisl enim tempor est. 
                Scelerisque neque turpis pulvinar suscipit. Aliquet donec donec id vitae purus ligula.<br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis fermentum tortor, diam nibh morbi nibh tincidunt nibh. Non eget nisl enim tempor est. 
                Scelerisque neque turpis pulvinar suscipit. Aliquet donec donec id vitae purus ligula.<br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis fermentum tortor, diam nibh morbi nibh tincidunt nibh. Non eget nisl enim tempor est. 
                Scelerisque neque turpis pulvinar suscipit. Aliquet donec donec id vitae purus ligula.<br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis fermentum tortor, diam nibh morbi nibh tincidunt nibh. Non eget nisl enim tempor est. 
                Scelerisque neque turpis pulvinar suscipit. Aliquet donec donec id vitae purus ligula. </p>
               
            </div>

            <div style={{paddingLeft: 20}}>
                <button type="button" className="backBut">Back</button>
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

export default ReadMore;