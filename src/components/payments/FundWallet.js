import React, { PureComponent } from "react";
import FlutterWave from "./FlutterWave";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import Spinner from "../Spinner";
import { fundWallet } from "../../redux/actions";
import { connect } from "react-redux";
class FundWallet extends PureComponent {
  state = { amount: 0 };

  setAmount = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, "").replace(/^0+/, "");
    // value = .toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    this.setState({ amount: value });
  };

  handleNext = () => {
    const { amount } = this.state;
    const { fundWallet, token } = this.props;

    if (amount > 0)
      // this.setState({ openPayment: true, isMakingPayment: true });
      fundWallet({ token, amount });
    else toast.error("Enter a valid amount");
  };

  render() {
    const { openPayment, amount, isMakingPayment } = this.state;

    return openPayment ? (
      <FlutterWave
        amount={amount}
        title="Fund Wallet"
        description="Fund your Emerald Farms wallet"
      />
    ) : isMakingPayment ? (
      <Spinner size="sm" />
    ) : (
      <div>
        <div className="p-2">
          <label for="exampleFormControlInput1">Amount</label>
          <form onSubmit={this.handleNext}>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              onChange={this.setAmount}
              value={`₦${amount}`}
            />
          </form>
        </div>

        <div
          className="modalForm p-2 d-flex justify-content-between"
          style={{ width: "100%" }}
        >
          <Button variant="primary" onClick={this.handleNext}>
            {/* {isFunding ? (
              <Spinner animation="border" role="status" size="sm">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (
              "Fund Wallet"
            )} */}
            Next
          </Button>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    token: state.auth?.token,
  };
};

export default connect(mapState, { fundWallet })(FundWallet);
