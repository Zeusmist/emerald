import React, { PureComponent } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { baseUrl } from "../../config";
import Spinner from "../Spinner";

class FundWalletModal extends PureComponent {
  state = {
    amount: "",
    wallet: "Emerald",
    password: "",
  };

  setStateValue = (state, value, type) => {
    if (type == "number") {
      value = value.replace(/[^0-9]/g, "");
    }
    this.setState({ [state]: value });
  };

  handleFundWallet = () => {
    const { amount, wallet, password } = this.state;
    const { id, closeModal, token, isWithdrawingWallet } = this.props;

    this.setState({ isFunding: true }, async () => {
      await fetch(
        `${baseUrl}/api/v1/admin/${
          isWithdrawingWallet ? "withdrawUser" : "fundUser"
        }/${id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount, wallet, password }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("Fund user wallet data", data);
          if (data?.code == 200) {
            closeModal();
            toast.success(data?.message);
          } else {
            toast.error(data?.message);
          }
        });
      this.setState({ isFunding: false });
    });
  };

  render() {
    const { isOpen, closeModal, isWithdrawingWallet } = this.props;
    const { isFunding } = this.state;
    return (
      <>
        <Modal show={isOpen} onHide={closeModal}>
          <Modal.Body className="modalBody slsl">
            <div
              style={{
                backgroundColor: isWithdrawingWallet ? "#B2A0FD" : "#41EC7B",
                width: "100%",
                color: "#fff",
                textAlign: "center",
                padding: "10px 0",
                fontWeight: "500",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            >
              {isWithdrawingWallet ? "Withdraw User Fund" : "Fund User"}
            </div>
            <div style={{ padding: "3% 10%" }}>
              <div className="modalForm p-2">
                <label
                  for="exampleFormControlInput1"
                  style={{ fontSize: "16px" }}
                >
                  Amount
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onChange={(e) =>
                    this.setStateValue("amount", e.target.value, "number")
                  }
                  value={this.state.amount}
                  placeholder="Fill in the amount here"
                  style={{
                    border: "0",
                    borderBottom: "1px solid #ced4da",
                    borderRadius: "0",
                  }}
                />
              </div>

              <div className="modalForm p-2">
                <label
                  for="exampleFormControlInput1"
                  style={{ fontSize: "16px" }}
                >
                  Select wallet
                </label>
                <select
                  class="form-control"
                  aria-label="Default select example"
                  onChange={(e) => this.setState({ wallet: e.target.value })}
                  value={this.state.wallet}
                  style={{
                    border: "0",
                    borderBottom: "1px solid #ced4da",
                    borderRadius: "0",
                  }}
                >
                  <option value="Emerald">Emerald</option>
                  <option value="Payout">Payout</option>
                  <option value="Savings">Savings</option>
                </select>
              </div>

              <div className="modalForm p-2">
                <label
                  for="exampleFormControlInput1"
                  style={{ fontSize: "16px" }}
                >
                  Admin password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onChange={(e) => this.setState({ password: e.target.value })}
                  placeholder="••••••••"
                  style={{
                    border: "0",
                    borderBottom: "1px solid #ced4da",
                    borderRadius: "0",
                  }}
                />
              </div>

              <div
                className="modalForm p-2 d-flex justify-content-between"
                style={{ width: "100%" }}
              >
                <Button
                  onClick={this.handleFundWallet}
                  className="formBut1"
                  disabled={isFunding}
                  style={{ width: "100%" }}
                >
                  {isFunding ? (
                    <Spinner size="sm" />
                  ) : isWithdrawingWallet ? (
                    "Withdraw Fund"
                  ) : (
                    "Fund wallet"
                  )}
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default FundWalletModal;
