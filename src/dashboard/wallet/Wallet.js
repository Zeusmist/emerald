import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { Card, Invest, Transact } from "../../ecommerce/svgs";
import { connect } from "react-redux";
import { getWallets } from "../../redux/actions";

const Wallet = ({ token, getWallets, data }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  console.log(
    ":::::::::::::::::::balance",
    `${data.user?.wallets[0]?.balance}  ${data.user?.wallets[1]?.balance} ${data.user?.wallets[2]?.balance}`
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("yes");
    await fetch(
      "https://desolate-anchorage-42140.herokuapp.com/api/v1/users/wallet/fundWallet",
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: amount, paymentMethod: paymentMethod }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    handleClose();
    //swal("Wallet Funded!", ` With ${amount}`, "success");
  };

  useEffect(() => {
    getWallets(token);
  }, []);

  return (
    <div className="dashboard col-md-12" style={{ height: "100%" }}>
      <div className="walletCards mt-4 row d-flex justify-content-around m-0">
        <div className="col-md-4 col-sm-12">
          <div className="cardOne ">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingRight: 15,
              }}
            >
              <p className="walletP">
                {data.user?.wallets[0]?.type}
                <br />
                WALLET
              </p>
              <div>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 100,
                    marginTop: 20,
                  }}
                >
                  <Card />
                </div>
                <small>Master card</small>
              </div>
            </div>
            <div>
              <p>
                Current Balance <br />
                <small className="pSmall">
                  N{data.user?.wallets[0]?.balance}.00
                </small>
              </p>
            </div>
          </div>
          <p className="text-center">Buy farm units from here</p>
        </div>

        <div className="col-md-4 col-sm-12">
          <div className="cardTwo">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingRight: 15,
              }}
            >
              <p className="walletP">
                {data.user?.wallets[1]?.type}
                <br />
                WALLET
              </p>
              <div>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 100,
                    marginTop: 20,
                  }}
                >
                  <Card />
                </div>
                <small>Master card</small>
              </div>
            </div>
            <div>
              <p>
                Current Balance <br />
                <small className="pSmall">
                  N{data.user?.wallets[1]?.balance}.00
                </small>
              </p>
            </div>
          </div>
          <p className="text-center">Make withdrawals from here</p>
        </div>

        <div className="col-md-4 col-sm-12">
          <div className="cardThree">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingRight: 15,
              }}
            >
              <p className="walletP">
                {data.user?.wallets[2]?.type}
                <br />
                WALLET
              </p>
              <div>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 100,
                    marginTop: 20,
                  }}
                >
                  <Card />
                </div>
                <small>Master card</small>
              </div>
            </div>
            <div>
              <p>
                Current Balance <br />
                <small className="pSmall">
                  N{data.user?.wallets[2]?.balance}.00
                </small>
              </p>
            </div>
          </div>
          <p className="text-center">Save funds here</p>
        </div>
      </div>

      <div className="walletCards mt-4 row d-flex justify-content-around pb-2">
        <div className="col-md-6 col-sm-12 p-4">
          <div className="fundWallet pb-4">
            <p className="fundB">
              Fund Wallet
              <br />
              <small className="fundM">
                Fund your Emerald, Payout and Savings wallet here
              </small>
            </p>
            <button type="button" className="fundBut" onClick={handleShow}>
              Fund
            </button>
          </div>
        </div>

        <div className="col-md-6 col-sm-12  p-4">
          <div className="fundWallet pb-4">
            <p className="fundB">
              Inter-Account Transfer
              <br />
              <small className="fundM">
                You can transfer funds from one wallet to another seamlessly.
              </small>
            </p>
            <button type="button" className="fundBut" onClick={handleShow}>
              Transfer
            </button>
          </div>
        </div>
      </div>

      <div className="row m-0 mt-3">
        <div className="col-md-6 col-sm-12">
          <div className="totalInvestment p-3">
            <div className="tInvest">
              <Transact />
            </div>
            <p className="pInvest">Total investments</p>
            <p className="pMoney">₦89,000.00</p>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="totalInvestment2 p-3">
            <div className="tInvest">
              <Invest />
            </div>
            <p className="pInvest2">Active investments</p>
            <p className="pMoney2">₦89,000.00</p>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="modalBody">
          <div>
            <div className="modalForm p-2">
              <label for="exampleFormControlInput1">Amount</label>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </div>

            <div className="modalForm p-2">
              <label for="exampleFormControlInput1">Payment Method</label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                onChange={(e) => {
                  setPaymentMethod(e.target.value);
                }}
              />
            </div>

            <div
              className="modalForm p-2 d-flex justify-content-between"
              style={{ width: "100%" }}
            >
              <Button variant="primary" onClick={handleSubmit}>
                Fund Wallet
              </Button>
              {/* <label className="switched">
                    <input type="checkbox" unchecked/>
                    <span className="slider round"></span>
                  </label> */}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state?.auth?.token,
    data: state?.user?.data,
  };
};

export default connect(mapStateToProps, { getWallets })(Wallet);
