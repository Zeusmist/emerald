import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { getCards } from "../../redux/actions";
import ProfileHeader from "./ProfileHeader";
import Profile from "./Profile";
import Spinner from "../../components/Spinner";

const BankDetails = ({ getCards, token, cards, banks }) => {
  const history = useHistory();
  const [isFetchingBanks, setIsFetchingBanks] = useState(false);
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  console.log("CARDS:::::::::::::::", cards);

  useEffect(() => {
    getCards(token);
  }, []);
  return (
    <div style={{ height: "100%" }}>
      <ProfileHeader />
      {/* <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
            <button className="bankInfo" onClick={handleShow}>Add Bank Details</button>
        </div> */}

      <div className="transaData mt-4">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Bank Name</th>
                <th scope="col">Account Name</th>
                <th scope="col">Account Number</th>
                <th scope="col">Account Info</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            {/* {banks.length > 0 && (
                <tbody>
                  {banks.map((bank, i) => (
                    <tr key={i}>
                      <td scope="row">{bank?.name}</td>
                      <td>
                        ₦
                        {(bank?.cost_per_unit)
                          .toFixed(2)
                          .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                      </td>
                      <td>{bank?.status}</td>
                      <td>{bank?.return}%</td>
                      <td>{bank?.duration} days</td>
                      <td>{bank?.no_of_available_units} units</td>
                      <td>
                        <button
                          type="button"
                          className="cusBut"
                          onClick={this.toggleModal}
                        >
                          Buy
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )} */}
          </table>
          {banks.length < 1 && (
            <div style={{ textAlign: "center" }}>
              {isFetchingBanks ? (
                <Spinner size="" />
              ) : (
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                  No banks added yet
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Body className="modalBody">
                <div>
                    <div className="modalForm p-2">
                    <label for="exampleFormControlInput1" >Investment Category</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1"/>
                    </div>

                    <div className="modalForm p-2">
                    <label for="exampleFormControlInput1">No of Unit</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1"/>
                    </div>

                    <div className="modalForm p-2">
                    <label for="exampleFormControlInput1">Duration</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1"/>
                    </div>

                    <div className="modalForm p-2">
                    <label for="exampleFormControlInput1">Amount</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1"/>
                    </div>

                    <div
                     className="modalForm p-2">
                    <label for="exampleFormControlInput1">Payment Method</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1"/>
                    </div>

                    <div className="modalForm p-2 d-flex justify-content-between" style={{width:'100%'}}>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                  <label className="switched">
                    <input type="checkbox" unchecked/>
                    <span className="slider round"></span>
                  </label>
                    </div>
                </div>
              
        </Modal.Body>
      </Modal> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state?.auth?.token,
    data: state?.user?.data,
    cards: state?.user?.cards,
    banks: [],
  };
};

export default connect(mapStateToProps, { getCards })(BankDetails);
