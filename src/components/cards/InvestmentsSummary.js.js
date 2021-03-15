import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setInvestments } from "../../redux/actions";
import { Invest, Transact } from "../../ecommerce/svgs";

const InvestmentsSummary = ({
  setInvestments,
  token,
  user_id,
  totalInvestments,
  activeInvestments,
}) => {
  useEffect(() => {
    // setInvestments({ token, user_id });
  }, []);

  return (
    <div className="row m-0 mt-3">
      <div className="col-md-6 col-sm-12">
        <div className="totalInvestment p-3">
          <div className="tInvest">
            <Transact />
          </div>
          <p className="pInvest">Total investments</p>
          <p className="pMoney">
            ₦{totalInvestments.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
          </p>
        </div>
      </div>
      <div className="col-md-6 col-sm-12">
        <div className="totalInvestment2 p-3">
          <div className="tInvest">
            <Invest />
          </div>
          <p className="pInvest2">Active investments</p>
          <p className="pMoney2">
            ₦{activeInvestments.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
          </p>
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    token: state?.auth.token,
    user_id: state?.auth.id,
    totalInvestments: 0,
    activeInvestments: 0,
  };
};

export default connect(mapState, { setInvestments })(InvestmentsSummary);
