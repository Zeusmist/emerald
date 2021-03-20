import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { Card } from "../../ecommerce/svgs";
import { connect } from "react-redux";
import { getWallets, toggleModal, transferFunds } from "../../redux/actions";
import swal from "sweetalert";
import { baseUrl } from "../../config";
import InvestmentsSummary from "../../components/cards/InvestmentsSummary.js";
import { getParameterByName } from "../../utils/urls";

const Wallet = ({
  token,
  getWallets,
  wallets = [],
  transferFunds,
  toggleModal,
}) => {
  const [smallText, setSmallText] = useState("");
  const [showFund, setShowFund] = useState(false);
  const handleShowFund = () =>
    toggleModal({ modal: "userboard", isOpen: true });
  const [showTransfer, setShowTransfer] = useState(false);
  const handleShowTransfer = () => setShowTransfer(true);
  const handleCloseTransfer = () => setShowTransfer(false);

  const [origin, setOrigin] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const [destination, setDestination] = useState("");

  console.log(":::::::::::::::::::balance", wallets);

  const cards = wallets.map((card, i) => {
    const background =
      card?.type == "Emerald"
        ? "linear-gradient(177.23deg, #0e4944 -13.49%, #3ce176 109.75%)"
        : card?.type == "Payout"
        ? "linear-gradient(177.23deg, #1B4C4B -13.49%, #166DAE 109.75%)"
        : "linear-gradient(177.23deg, #647945 -13.49%, #CBC115 109.75%)";
    const description =
      card?.type == "Emerald"
        ? "Buy farm units from here"
        : card?.type == "Payout"
        ? "Make withdrawals from here"
        : "Save funds here";
    return (
      <div className="col-md-4 col-sm-12">
        <div className="cardOne " style={{ background }}>
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
              <small style={{ color: "#fff" }}>Master card</small>
            </div>
          </div>
          <div>
            <p style={{ color: "rgba(255, 255, 255, 0.5)" }}>
              Current Balance <br />
              <small className="pSmall">
                ₦
                {(card?.balance).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
              </small>
            </p>
          </div>
        </div>
        <div
          style={{ textAlign: "center", fontSize: "20px", color: "#0f3d27" }}
        >
          {description}
        </div>
        {/* <p className="text-center">Buy farm units from here</p> */}
      </div>
    );
  });

  const handleSubmitTransfer = async (e) => {
    e.preventDefault();

    if (origin === destination || origin == "" || destination == "") {
      swal(
        "Origin must be valid and must be different from Destination",
        "failed"
      );
    } else {
      transferFunds({
        token,
        transferData: { origin, destination, amount: transferAmount },
      });
    }

    handleCloseTransfer();
  };

  useEffect(() => {
    const successfulPayement = getParameterByName("status");
    if (successfulPayement == "successful") {
      swal(
        "Payment was successful!",
        "Your Emerald Wallet balance has been updated",
        "success"
      );
      setTimeout(() => {
        getWallets(token);
      }, 5000);
    } else {
      getWallets(token);
    }
  }, []);

  return (
    <div className="dashboard col-md-12" style={{ height: "100%" }}>
      <div className="walletCards mt-4 row d-flex justify-content-around m-0">
        {cards}
      </div>

      <div className="walletCards mt-4 row d-flex justify-content-around pb-2">
        <div className="col-md-6 col-sm-12 p-4" style={{ padding: "0px" }}>
          <div className="fundWallet pb-4">
            <p className="fundB">
              Fund Wallet
              <br />
              <div className="fundM">
                Fund your Emerald, Payout and Savings wallet here
              </div>
            </p>
            <button type="button" className="fundBut" onClick={handleShowFund}>
              Fund
            </button>
          </div>
        </div>

        <div className="col-md-6 col-sm-12  p-4" style={{ padding: "0px" }}>
          <div className="fundWallet pb-4">
            <p className="fundB">
              Inter-Account Transfer
              <br />
              <div className="fundM">
                You can transfer funds from one wallet to another seamlessly.
              </div>
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

      <InvestmentsSummary />

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
                <option value="">Transfer Origin</option>
                <option value="Emerald">Emerald</option>
                <option value="Savings">Savings</option>
                <option value="Payout">Payout</option>
              </select>
            </div>

            <div className="modalForm p-2">
              <small style={{ color: "red" }}>{smallText}</small>
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
                <option value="">Transfer Destination</option>
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
                Transfer
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

const mapDispatch = {
  getWallets,
  transferFunds,
  toggleModal,
};

export default connect(mapStateToProps, mapDispatch)(Wallet);
