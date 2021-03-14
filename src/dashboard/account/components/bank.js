/* eslint-disable */
import React, {useState} from "react";
import { ReactComponent as BackArrow } from "../svg/backArrow.svg";
import { ReactComponent as Add } from "../svg/add.svg";
import { ReactComponent as MasterCard } from "../svg/mastercard.svg";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";


import Button from "../../../components/Button";

import "../styles/index.css";

const PaymentMethod = ({id, token}) => {
  const [showFund, setShowFund] = useState(false);
  const handleCloseFund = () => setShowFund(false);
  const handleShowFund = () => setShowFund(true);

  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryData] = useState('')
  const [cvv, setCvv] = useState('')

  const AddBank = async ()=>{
    console.log('yes')


    await fetch(
      "https://desolate-anchorage-42140.herokuapp.com/api/v1/users/addCard",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _owner: id, cardNumber: cardNumber,expiryDate:expiryDate,cvv:cvv }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        swal("Card Added", "success");
        
        // if(data?.status === 'success'){
        //   swal("Funds Transfer!", ` With ${transferAmount}`, "success");
        // }else{
        //   swal("Funds Transfer Failed!", ` With ${transferAmount}`, "failed");
        // }
        
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <div className="dashboard__holder">
      {/* <BackArrow /> */}
      <>
        <div className="dashboard__card__title">My Bank Details</div>
        <div className="dashboard__card__sub">
          Add your bank details to recieve money.
        </div>
      </>
      <br/><br/><br/><br/>

     {false ? <div className="dashboard__card--cardItem__holder">
        <div className="dashboard__card--bankItem ">
          <span className="main">GUARANTY TRUST BANK</span><br/><br/>
          <span className="sub">*** *** 0480</span><br/><br/>
        </div>
      </div>: null}
      <div className="dashboard__card__add-button"  onClick={handleShowFund} style={{cursor:'pointer'}}>
        <Add /> <span>Add Bank</span>
      </div><br/><br/>
      <div className="dashboard__card__button">
        <Button
          border="1px solid #979797"
          text="Cancel"
          main="#9DCC6B"
          sub="#000"
        />
      </div>
      <Modal show={showFund} onHide={handleCloseFund}>
        <Modal.Body className="modalBody">
          <div>
            <h4>Bank Details</h4>
            <div className="modalForm p-2">
              <small for="exampleFormControlInput1">Card Number</small>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder='4444 4444 4444 4444'
                onChange={(e) => {
                setCardNumber(e.target.value);
                }}
              />
            </div>

            <div className="modalForm p-2">
              <small for="exampleFormControlInput1">Card Expiry Date</small>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder='2021'
                onChange={(e) => {
                  setExpiryData(e.target.value);
                }}
              />
            </div>

            <div className="modalForm p-2">
              <small for="exampleFormControlInput1">Card Cvv</small>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder='123'
                onChange={(e) => {
                  setCvv(e.target.value);
                }}
                style={{width: "70 !important"}}
              />
            </div>

            <div
              className="modalForm p-2 d-flex justify-content-between"
              style={{ width: "100%" }}
            >
              <button  onClick={AddBank} style={{padding: 10, background:'#FFFFFF', border:'none'}}>
                Add Bank
              </button>
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
    id:state?.auth?.id,
  };
};

export default connect(mapStateToProps, null)(PaymentMethod);
