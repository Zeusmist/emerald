import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { baseUrl } from "../../config";
import bank from "../../dashboard/account/components/bank";
import { Farmer } from "../../dashboard/account/svg";
import { getParameterByName } from "../../utils/urls";
import FundWalletModal from "./FundWalletModal";

class UserProfile extends PureComponent {
  state = {
    userData: {},
    nextOfKinData: {},
    banks: [],
  };

  getBankAccounts = async (id) => {
    let banks = [];
    await fetch(`${baseUrl}/api/v1/admin/getAllBankDetails?_owner=${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.props.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Get bank data", data);
        if (data?.code == 200) {
          banks.push(...data?.data);
        } else {
          toast.error(data?.message);
        }
      })
      .catch((e) => console.log(e));
    this.setState({ banks });
  };

  componentDidMount() {
    const userId = getParameterByName("id");
    this.setState({ userId }, async () => {
      if (userId) {
        await fetch(`${baseUrl}/api/v1/admin/users/${userId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${this.props.token}`,
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then(async (data) => {
            console.log("Get user data", data);
            if (data?.code == 200) {
              if (data?.data?.bankAccounts) {
                await this.getBankAccounts(userId);
              }
              this.setState({
                userData: data?.data,
                nextOfKinData: {
                  firstName: data?.data?.nextOfKinFirstName,
                  lastName: data?.data?.nextOfKinLastName,
                  email: data?.data?.nextOfKinEmail,
                  phone: data?.data?.nextOfKinPhone,
                  address: data?.data?.nextOfKinAddress,
                },
              });
            } else {
              toast.error(data?.message);
            }
          })
          .catch((e) => console.log(e));
      }
    });
  }

  navigateToInvestmentHistory = () => {
    if (this.state.userId)
      this.props.history.replace(`/investmenthistory?id=${this.state.userId}`);
    else toast.error("Cannot find user id");
  };

  render() {
    const {
      userData,
      nextOfKinData,
      banks,
      isFundingWallet,
      isWithdrawingWallet,
      userId,
    } = this.state;
    const { token } = this.props;
    const allData = [userData, nextOfKinData];
    return (
      <>
        <div className="row m-0">
          <div className="col-md-6 col-sm-12">
            <h4>User Profile</h4>
            <div className="col-md-12 d-flex justify-content-center mt-3">
              <div
                className="meProfile"
                style={{
                  display: "",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div>
                  <Farmer />
                </div>
              </div>
            </div>
            {allData.map((data, i) => (
              <>
                <h6>{i == 0 ? "Personal Profile" : "Next of kin"}</h6>
                <div className="formHolder">
                  <div>
                    <input
                      disabled
                      type="text"
                      class="myshortform"
                      placeholder="First name"
                      value={data?.firstName}
                    />
                    <input
                      disabled
                      type="text"
                      class="myshortform"
                      placeholder="Last name"
                      value={data?.lastName}
                    />
                  </div>
                  <div>
                    <input
                      disabled
                      type="text"
                      className="myForm"
                      placeholder="Email"
                      value={data?.email}
                    />
                  </div>
                  <div>
                    <input
                      disabled
                      type="text"
                      className="myForm"
                      placeholder="Phone number"
                      value={data?.phone}
                    />
                  </div>
                  <div>
                    <input
                      disabled
                      type="text"
                      className="myForm"
                      placeholder="Address"
                      value={data?.address}
                    />
                  </div>
                </div>
              </>
            ))}
          </div>
          <div
            className="col-md-6 col-sm-12 p-3"
            style={{ backgroundColor: "#fff" }}
          >
            <h6>Bank Details</h6>
            {banks.map((bank, i) => (
              <div key={i} style={{ marginBottom: "10px" }}>
                • {(bank?.bankName).toUpperCase() + " " + bank.accountNumber}
              </div>
            ))}
            {banks.length == 0 && <div>No banks saved</div>}
            <br />
            <h6>Wallet Funding</h6>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <button
                className="btn btn-outline-secondary"
                onClick={() => this.setState({ isFundingWallet: true })}
              >
                Fund Wallet
              </button>
              <FundWalletModal
                isOpen={isFundingWallet}
                closeModal={() => this.setState({ isFundingWallet: false })}
                id={userId}
                token={token}
              />
              <button
                className="btn btn-outline-secondary"
                onClick={() => this.setState({ isWithdrawingWallet: true })}
                style={{ marginTop: "10px" }}
              >
                Withdraw Funds
              </button>
              <FundWalletModal
                isOpen={isWithdrawingWallet}
                closeModal={() => this.setState({ isWithdrawingWallet: false })}
                id={userId}
                token={token}
                isWithdrawingWallet
              />
            </div>

            <br />
            <br />
            <small
              className="btn viewInvest"
              onClick={this.navigateToInvestmentHistory}
            >
              View Investment History
            </small>
          </div>
        </div>
      </>
    );
  }
}

export default connect((state) => ({ token: state.auth?.token }))(UserProfile);
