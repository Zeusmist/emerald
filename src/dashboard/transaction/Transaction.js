import React, {useEffect} from 'react';
import { Invest, Transact } from '../../ecommerce/svgs';
import '../navbar/navStyle.css';
import {connect} from 'react-redux'
import {getTransactions} from '../../redux/actions'

const Transactions = ({getTransactions, token})=>{

    useEffect(()=>{
        getTransactions(token)
    }, [])
    return(
        <div className="dashboard col-md-12" style={{height: '100%'}}>
            <div className="tranMenu">
            <button type="button" className="cusBut">Fund wallet</button>
            <div style={{marginTop: 10, display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}>
                <div>
                <button type="button" className="butGroup col-md-3 col-sm-3">Transactions</button>
                <button type="button" className="butGroup col-md-3 col-sm-3">Investments</button>
                <button type="button" className="butGroup col-md-3 col-sm-3">Payouts</button>
                <button type="button" className="butGroup col-md-3 col-sm-3">Deposits</button>
                </div>
                <button type="button" className="cusBut" style={{borderRadius:8}}><i className="fa fa-download" aria-hidden="true"></i>Download</button>

            </div>
            </div>

            <div className="transaData mt-4">
            <div class="table-responsive">
            <table class="table">
                    
            <thead>
                <tr>
                <th scope="col">Transaction </th>
                <th scope="col">Amount per unit</th>
                <th scope="col">Total Amount</th>
                <th scope="col">Interest %</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Wheat Farm</td>
                <td>#50,000</td>
                <td>Open</td>
                <td>@mdo</td>
                <td>180 days</td>
                <td>20 units</td>
                <td><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></td>

                </tr>
                <tr>
                <td>Maize Farm</td>
                <td>#50,000</td>
                <td>Open</td>
                <td>@fat</td>
                <td>180 days</td>
                <td>20 units</td>
                <td><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></td>

                </tr>
                <tr>
                <td>Poultry Farm</td>
                <td>#50,000</td>
                <td>Open</td>
                <td>@twitter</td>
                <td>160 days</td>
                <td>20 units</td>
                <td><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></td>

                </tr>
                <tr>
                <td>Poultry Farm</td>
                <td>#50,000</td>
                <td>Open</td>
                <td>@twitter</td>
                <td>120 days</td>
                <td>20 units</td>
                <td><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></td>

                </tr>
                <tr>
                <td>Poultry Farm</td>
                <td>#50,000</td>
                <td>Open</td>
                <td>@twitter</td>
                <td>130 days</td>
                <td>20 units</td>
                <td><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></td>
                </tr>
            </tbody>
            </table>
            </div>
            </div>

            <div className="dashTrans mt-4">
            <div className="row m-0">
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
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      token: state?.auth?.token,
    };
  };
export default connect(mapStateToProps, {getTransactions})(Transactions);