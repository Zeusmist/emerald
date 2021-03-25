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

  handleNext = (e) => {
    e.preventDefault();
    const { amount } = this.state;
    const { fundWallet, token } = this.props;
    this.setState({ isMakingPayment: true }, async () => {
      if (amount > 0) {
        await fundWallet({ token, amount });
      } else toast.error("Enter a valid amount");
      this.setState({ isMakingPayment: false });
    });
  };

  render() {
    const { amount, isMakingPayment } = this.state;

    return isMakingPayment ? (
      <div style={{ textAlign: "center" }}>
        <Spinner size="lg" />
      </div>
    ) : (
      <div>
        <h5 style={{ color: "#0E4944", paddingLeft: ".5rem" }}>Fund Wallet</h5>
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
          <Button
            variant="primary"
            onClick={this.handleNext}
            style={{ backgroundColor: "rgb(24 116 108)" }}
          >
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
