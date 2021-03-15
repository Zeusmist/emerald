/*eslint-disable*/

import React, { useState } from "react";
import "./dashboard.css";
import { FundModal, Graph, CompleteReg } from "./svg";
import { Invest, Transact } from "../../ecommerce/svgs";
import "../navbar/navStyle.css";
import { connect } from "react-redux";
import { Button, Modal, Spinner } from "react-bootstrap";
import swal from "sweetalert";
import { ProjectCard } from "../../components/cards";
import { baseUrl } from "../../config";
import { toast } from "react-toastify";
import { toggleModal } from "../../redux/actions";

const Dashboard = ({ token, toggleModal }) => {
  // const [show, setShow] = useState(false);
  const [isFunding, setIsFunding] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const handleShow = () => toggleModal({ modal: "userboard", isOpen: true });

  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  console.log("TOKEN::::::::::::::::::", token);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFunding(true);
    await fetch(`${baseUrl}/api/v1/users/wallet/fundWallet`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount, paymentMethod }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if (data?.status == "fail") {
          toast.error(data.message);
          return;
        }
        handleClose();
        swal("Wallet Funded!", ` With ${amount}`, "success");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setIsFunding(false);
  };

  return (
    <>
      <div className="user_dashboard_root">
        <div className="dashboardTopAction row">
          <div className="col">
            <button
              className="btn btn-primary fundWalletButton"
              onClick={handleShow}
            >
              Fund Wallet
            </button>
          </div>
          <div className="col-6 flex-end">
            {/* <DaySelector /> */}
            <button
              type="button"
              className="butGroup col-md-3 col-sm-3 activeBtn durBtn"
            >
              Day
            </button>
            <button type="button" className="butGroup col-md-3 col-sm-3 durBtn">
              Week
            </button>
            <button type="button" className="butGroup col-md-3 col-sm-3 durBtn">
              Month
            </button>
            <button type="button" className="butGroup col-md-3 col-sm-3 durBtn">
              Year
            </button>
          </div>
          <div className="col">
            {/* <ExportButton /> */}
            <button
              type="button"
              className="cusBut"
              style={{ borderRadius: 8 }}
            >
              <i className="fa fa-download" aria-hidden="true"></i> Export
            </button>
          </div>
        </div>
        <div className="chartSection">
          {/* <ChartAnalysis /> */}
          <div className="analyticsTableCont">
            <div className="farmProjs">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
            <Graph />
          </div>
        </div>

        <div className="dashTrans mt-4">
          <div className="row m-0">
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
        </div>
        {/* 
        <Modal show={show} onHide={handleClose}>
          <Modal.Body className="modalBody">
            <div className="p-2">
              <label for="exampleFormControlInput1">Amount</label>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                placeholder="1000000"
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
                {isFunding ? (
                  <Spinner animation="border" role="status" size="sm">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                ) : (
                  "Fund Wallet"
                )}
              </Button>
            </div>
          </Modal.Body>
        </Modal> */}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state?.auth?.token,
  };
};

export default connect(mapStateToProps, { toggleModal })(Dashboard);
