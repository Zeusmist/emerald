import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { getBanks } from "../../redux/actions";
import ProfileHeader from "./ProfileHeader";
import Spinner from "../../components/Spinner";
import nigerianBanks from "./nigerianBanks";
import { toast } from "react-toastify";
import { baseUrl } from "../../config";

const BankDetails = ({ getBanks, token, cards, banks }) => {
  const initialBank = nigerianBanks[0];

  const [isFetchingBanks, setIsFetchingBanks] = useState(false);
  const [isAddingBank, setIsAddingBank] = useState(false);
  const [showBank, setShowBank] = useState(false);
  const [bank, setBank] = useState({ ...initialBank });
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const handleCloseBank = () => {
    setAccountNumber("");
    setAccountName("");
    setBank({ ...initialBank });
    setShowBank(false);
  };
  const handleShowBank = () => setShowBank(true);

  const handleSetBank = (e) => {
    const selectedBank = nigerianBanks.find(
      (bank) => bank.code == e.target.value
    );
    if (selectedBank)
      setBank({ code: selectedBank.code, name: selectedBank.name });
  };

  const handleSetAccountNumber = (value) => {
    value = value.replace(/[^0-9]/g, "");
    setAccountNumber(value);
  };

  const handleAddBank = async () => {
    setIsAddingBank(true);
    if (accountName == "" || accountNumber == "" || accountNumber.length < 10) {
      toast.error("Invalid field inputs");
    } else {
      await fetch(`${baseUrl}/api/v1/users/addBankDetails`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bankCode: bank.code,
          bankName: bank.name,
          accountName,
          accountNumber,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Add bank data", data);
          if (data?.code == 200) {
            window.location.reload();
          } else {
            toast.error(data?.message);
          }
        });
    }
    setIsAddingBank(false);
  };

  const handleDeleteBank = async (id) => {
    setIsDeleting(id);
    await fetch(`${baseUrl}/api/v1/users/deleteBankDetail?_id=${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("delete bank data", data);
        if (data?.code == 200) {
          setTimeout(() => {
            window.location.reload();
          }, 500);
        } else {
          toast.error(data?.message);
        }
      });
    setIsDeleting(false);
  };

  useEffect(() => {
    if (banks.length == 0) getBanks(token);
  }, []);
  return (
    <div style={{ height: "100%" }}>
      <ProfileHeader />

      <div style={{ textAlign: "right" }}>
        <button className="btn btn-info" onClick={handleShowBank}>
          Add Bank Details
        </button>
      </div>

      <div className="farmList mt-4">
        {/* <div className="transaData mt-4" style={{ minHeight: "200px" }}> */}
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">Bank Name</th>
                <th scope="col">Account Name</th>
                <th scope="col">Account Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {banks.length > 0 && (
              <tbody>
                {banks.map((bank, i) => (
                  <tr key={i}>
                    <td scope="row">{bank?.bankName}</td>
                    <td>{bank?.accountName}</td>
                    <td>{bank?.accountNumber}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleDeleteBank(bank?._id)}
                      >
                        {isDeleting == bank?._id ? (
                          <Spinner size="sm" />
                        ) : (
                          "Delete"
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
          {banks.length < 1 && (
            <div style={{ textAlign: "center", padding: "10px" }}>
              {isFetchingBanks ? (
                <Spinner size="lg" />
              ) : (
                // <div className="emptyList" style={{ fontSize: "20px", fontWeight: "bold" }}>
                <div className="emptyList">No banks added yet</div>
              )}
            </div>
          )}
        </div>
      </div>

      <Modal show={showBank} onHide={handleCloseBank}>
        <Modal.Body className="modalBody">
          <div>
            <h2>Bank Details</h2>
            <div className="modalForm p-2" style={{ width: "initial" }}>
              <label for="exampleFormControlInput1">Bank Name</label>
              <select
                className="form-control sasa"
                onChange={handleSetBank}
                value={bank.code}
              >
                {nigerianBanks.map((bank, i) => (
                  <option key={i} value={bank.code}>
                    {bank.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="modalForm p-2" style={{ width: "initial" }}>
              <label for="exampleFormControlInput1">Account Name</label>
              <input
                type="text"
                className="form-control sasa"
                id="exampleFormControlInput1"
                placeholder="John Doe"
                onChange={(e) => {
                  setAccountName(e.target.value);
                }}
                value={accountName}
              />
            </div>

            <div className="modalForm p-2" style={{ width: "initial" }}>
              <label for="exampleFormControlInput1">Account Number</label>
              <input
                type="text"
                className="form-control sasa"
                id="exampleFormControlInput1"
                placeholder="1234567890"
                onChange={(e) => {
                  handleSetAccountNumber(e.target.value);
                }}
                value={accountNumber}
              />
            </div>

            <div
              className="modalForm p-2 d-flex justify-content-between"
              style={{ width: "100%" }}
            >
              <button className="btn btn-success" onClick={handleAddBank}>
                {isAddingBank ? <Spinner size="sm" /> : "Add bank"}
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state?.user?.banks);
  return {
    token: state?.auth?.token,
    data: state?.user?.data,
    cards: state?.user?.cards,
    banks: state?.user?.banks,
  };
};

export default connect(mapStateToProps, { getBanks })(BankDetails);
