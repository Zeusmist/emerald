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
    const { id, closeModal, token } = this.props;

    this.setState({ isFunding: true }, async () => {
      await fetch(`${baseUrl}/api/v1/admin/fundUser/${id}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount, wallet, password }),
      })
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
    const { isOpen, closeModal } = this.props;
    const { isFunding } = this.state;
    return (
      <>
        <Modal show={isOpen} onHide={closeModal}>
          <Modal.Body className="modalBody">
            <div>
              <div className="modalForm p-2">
                <label for="exampleFormControlInput1">Amount</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onChange={(e) =>
                    this.setStateValue("amount", e.target.value, "number")
                  }
                  value={this.state.amount}
                />
              </div>

              <div className="modalForm p-2">
                <label for="exampleFormControlInput1">Select wallet</label>
                <select
                  class="form-control"
                  aria-label="Default select example"
                  onChange={(e) => this.setState({ wallet: e.target.value })}
                  value={this.state.wallet}
                >
                  <option value="Emerald">Emerald</option>
                  <option value="Payout">Payout</option>
                  <option value="Savings">Savings</option>
                </select>
              </div>

              <div className="modalForm p-2">
                <label for="exampleFormControlInput1">
                  Enter your password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onChange={(e) => this.setState({ password: e.target.value })}
                  placeholder="••••••••"
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
                >
                  {isFunding ? <Spinner size="sm" /> : "Fund wallet"}
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
