import React, { PureComponent, useEffect, useState } from "react";
import Table from "./Table";
import { Modal, Button } from "react-bootstrap";
import Spinner from "../../components/Spinner";
import { connect } from "react-redux";
import { getBanks } from "../../redux/actions";
import { baseUrl } from "../../config";
import { toast } from "react-toastify";

const PayoutModalMapState = ({ auth, user }) => ({
  token: auth?.token,
  banks: user?.banks,
});

const PayoutModal = connect(PayoutModalMapState, { getBanks })(
  ({ isOpen, closeModal, getBanks, token, banks }) => {
    const [isFetchingBanks, setIsFetchingBanks] = useState(true);
    const [isRequesting, setIsRequesting] = useState(false);
    const [amount, setAmount] = useState("0");
    const [bank, setBank] = useState(banks[0]?._id);

    const handleRequestPayout = async () => {
      setIsRequesting(true);
      if (Number(amount) < 100) {
        toast.error("Amount cannot be less than 100");
      } else {
        console.log({ amount, bank });
        await fetch(`${baseUrl}/api/v1/users/payout`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount, bankDetailsID: bank }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("request payout data", data);
            if (data?.code == 200) {
              toast.success(data?.message);
              closeModal();
              // window.location.reload();
            } else toast.error(data?.message);
          });
      }
      setIsRequesting(false);
    };

    useEffect(async () => {
      await getBanks(token);
      setIsFetchingBanks(false);
    }, []);

    return (
      <Modal show={isOpen} onHide={closeModal}>
        <Modal.Body className="modalBody">
          {isFetchingBanks ? (
            <div style={{ textAlign: "center" }}>
              <Spinner size="lg" />
            </div>
          ) : banks.length > 0 ? (
            <div>
              <div className="modalForm p-2">
                <label for="exampleFormControlInput1">Amount</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onChange={(e) =>
                    setAmount(e.target.value.replace(/[^0-9]/g, ""))
                  }
                  value={amount}
                />
              </div>

              <div className="modalForm p-2">
                <label for="exampleFormControlInput1">Bank Account</label>
                <select
                  class="form-control"
                  aria-label="Default select example"
                  onChange={(e) => setBank(e.target.value)}
                >
                  {banks.map((bank, i) => (
                    <option value={bank?._id}>{bank?.bankName}</option>
                  ))}
                </select>
              </div>

              <div
                className="modalForm p-2 d-flex justify-content-between"
                style={{ width: "100%" }}
              >
                <Button
                  onClick={handleRequestPayout}
                  className="formBut1"
                  disabled={isRequesting}
                >
                  {isRequesting ? <Spinner size="sm" /> : "Request Payout"}
                </Button>
              </div>
            </div>
          ) : (
            <div>No Banks Added Yet</div>
          )}
        </Modal.Body>
      </Modal>
    );
  }
);

const headers = ["Payout amount", "Date", "Status"];

const ItemComponent = ({ item }) => {
  return (
    <>
      <td>₦{(item?.amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}</td>
      <td>{item?.date_initiated}</td>
      <td>{item?.status}</td>
    </>
  );
};

class Payouts extends PureComponent {
  render() {
    const { payoutModalIsOpen, closePayoutModal } = this.props;
    return (
      <>
        <Table headers={headers} ItemComponent={ItemComponent} type="payouts" />
        {payoutModalIsOpen && (
          <PayoutModal
            isOpen={payoutModalIsOpen}
            closeModal={closePayoutModal}
          />
        )}
      </>
    );
  }
}

export default Payouts;
