import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { Card, Invest, Transact } from "../../ecommerce/svgs";
import { connect } from "react-redux";
import { getWallets } from "../../redux/actions";
import swal from "sweetalert";

const Wallet = ({ token, getWallets, wallets }) => {
  const [smallText, setSmallText] = useState('')
  const [showFund, setShowFund] = useState(false);
  const handleCloseFund = () => setShowFund(false);
  const handleShowFund = () => setShowFund(true);
  const [showTransfer, setShowTransfer] = useState(false);
  const handleShowTransfer = () => setShowTransfer(true);
  const handleCloseTransfer = () => setShowTransfer(false);

  const [origin, setOrigin] = useState('')
const [transferAmount, setTransferAmount] = useState('')
  const [destination, setDestination] = useState('')
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  
  console.log(
    ":::::::::::::::::::balance", wallets
  );


  const cards = wallets.map((card, i)=>{
    return(
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
                {card?.type}
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
                 N{card?.balance}.00
                </small>
              </p>
            </div>
          </div>
          {/* <p className="text-center">Buy farm units from here</p> */}
        </div>
    )
  })

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

    handleCloseFund();
    swal("Wallet Funded!", ` With ${amount}`, "success");
  };


  const handleSubmitTransfer = async (e)=>{
    e.preventDefault();

    if(origin === destination){
      swal("Origin must be different from Destination", "failed");
    }else{
      await fetch(
        "https://desolate-anchorage-42140.herokuapp.com/api/v1/users/wallet/transfer",
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ origin: origin, destination: destination,amount:transferAmount }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data?.status);
          if(data?.status === 'success'){
            swal("Funds Transfer!", ` With ${transferAmount}`, "success");
          }else{
            swal("Funds Transfer Failed!", ` With ${transferAmount}`, "failed");
          }
          
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    
    
  
      handleCloseFund();
  }

  useEffect(() => {
    getWallets(token);
  }, []);

  return (
    <div className="dashboard col-md-12" style={{ height: "100%" }}>
      <div className="walletCards mt-4 row d-flex justify-content-around m-0">
        {cards}
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
            <button type="button" className="fundBut" onClick={handleShowFund}>
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
            <button
              type="button"
              className="fundBut"
              onClick={handleShowTransfer}
            >
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

      <Modal show={showFund} onHide={handleCloseFund}>
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

      <Modal show={showTransfer} onHide={handleCloseTransfer}>
        <Modal.Body className="modalBody">
          <div>
            <div className="modalForm p-2">
              <label for="exampleFormControlInput1">Amount</label>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                onChange={(e) => {
                  setTransferAmount(e.target.value);
                }}
              />
            </div>
            <div className="modalForm p-2">
              <select
                name="cars"
                id="cars"
                style={{
                  width: 300,
                  padding: 10,
                  border: ".5px solid grey",
                  borderRadius: 20,
                }}
                onChange={(e) => {
                  setOrigin(e.target.value);
                }}
              >
                <option>Transfer Origin</option>
                <option value="Emerald">Emerald</option>
                <option value="Savings">Savings</option>
                <option value="Payout">Payout</option>
              </select>
            </div>
            
            <div className="modalForm p-2">
            <small style={{color:'red'}}>{smallText}</small>
              <select
                name="cars"
                id="cars"
                style={{
                  width: 300,
                  padding: 10,
                  border: ".5px solid grey",
                  borderRadius: 20,
                }}
                onChange={(e) => {
                  setDestination(e.target.value);
                }}
              >
                <option>Transfer Destination</option>
                <option value="Emerald">Emerald</option>
                <option value="Savings">Savings</option>
                <option value="Payout">Payout</option>
              </select>
            </div>
            
            <div
              className="modalForm p-2 d-flex justify-content-between"
              style={{ width: "100%" }}
            >
              <Button variant="primary" onClick={handleSubmitTransfer}>
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
    wallets: state?.user?.wallets,
  };
};

export default connect(mapStateToProps, { getWallets })(Wallet);
