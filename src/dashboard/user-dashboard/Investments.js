import React, { PureComponent, useState } from "react";
import { connect } from "react-redux";
import { setInvestments } from "../../redux/actions";
import Table from "./Table";
import { Button, Modal } from "react-bootstrap";
import Spinner from "../../components/Spinner";
import { baseUrl } from "../../config";
import { toast } from "react-toastify";

const headers = [
  "Farmlist(units)",
  "Amount",
  "Maturity Date",
  // "Days left",
  "Interest %",
  "Expected returns",
  "Status",
  "Action",
];

const ItemComponent = connect((state) => ({ token: state.auth?.token }))(
  ({ item, token }) => {
    const dateOptions = { day: "2-digit", month: "2-digit", year: "2-digit" };
    let maturityDate = new Date(item?.farm?.closing_date);
    const [showModal, setShowModal] = useState(false);
    const [units, setUnits] = useState(0);
    const [isLiquidating, setIsLiquidating] = useState(false);

    const handleLiquidate = async (id) => {
      setIsLiquidating(true);
      await fetch(`${baseUrl}/api/v1/users/liquidateInvestment`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ investmentId: id, noOfUnits: units }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Liquidate data", data);
          if (data?.code == 200) {
            toast.success(data?.message);
            setTimeout(() => window.location.reload(), 2000);
          } else {
            toast.error(data?.message);
          }
        })
        .catch((e) => console.log(e));
      setIsLiquidating(false);
    };

    const daysLeft = "";
    return (
      <>
        <td scope="row">{`${item?.farm?.name} (${item?.no_of_units})`}</td>
        <td>
          ₦{(item?.amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
        </td>
        <td>{maturityDate.toLocaleDateString("en-US", dateOptions)}</td>
        {/* <td>{daysLeft}</td> */}
        <td>{item?.farm?.return["$numberDecimal"]}%</td>
        <td>
          ₦
          {(item?.total_returns).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
        </td>
        <td>{item?.status}</td>
        <td>
          <button
            className="btn btn-outline-success"
            onClick={() => setShowModal(true)}
          >
            Liquidate
          </button>
        </td>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Body className="modalBody">
            <div>
              <div className="modalForm p-2">
                <label for="exampleFormControlInput1">No of Unit(s)</label>
                <input
                  type="number"
                  max={item.no_of_units}
                  min={0}
                  class="form-control"
                  id="exampleFormControlInput1"
                  onChange={(e) => setUnits(e.target.value)}
                />
              </div>
              <div
                className="modalForm p-2 d-flex justify-content-between"
                style={{ width: "100%" }}
              >
                <Button
                  variant="primary"
                  onClick={() => handleLiquidate(item._id)}
                  className="formBut1"
                >
                  {isLiquidating ? <Spinner size="sm" /> : "Liquidate"}
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
);

class Investments extends PureComponent {
  componentDidMount() {
    const { setInvestments, token, user_id } = this.props;
    setInvestments({ token, user_id });
  }

  render() {
    return (
      <Table
        headers={headers}
        ItemComponent={ItemComponent}
        type="investments"
      />
    );
  }
}

const mapState = (state) => {
  return {
    token: state.auth?.token,
    user_id: state.auth?.id,
  };
};

export default connect(mapState, { setInvestments })(Investments);
