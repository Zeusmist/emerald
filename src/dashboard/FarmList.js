/* eslint-disable */

import React, { PureComponent } from "react";
import "./navbar/navStyle.css";
import { Button, Modal } from "react-bootstrap";
import { baseUrl } from "../config";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import Switch from "react-switch";
import Spinner from "../components/Spinner";
import { toggleModal } from "../redux/actions";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

class FarmList extends PureComponent {
  state = {
    farms: [],
  };

  closeModal = () => this.setState({ selectedFarm: false });

  handleSelectFarm = (farm) =>
    this.setState({
      selectedFarm: { farm, no_of_units: 0, rollover_status: false },
    });

  toggleSwitch = () => {
    const rollover_status = this.state?.selectedFarm?.rollover_status;
    this.setState({
      selectedFarm: {
        ...this.state.selectedFarm,
        rollover_status: !rollover_status,
      },
    });
  };

  setUnits = (no_of_units) =>
    this.setState({
      selectedFarm: { ...this.state.selectedFarm, no_of_units },
    });

  handleBuy = async () => {
    const { token } = this.props;
    const { selectedFarm } = this.state;

    this.setState({ isBuying: true }, async () => {
      if (selectedFarm?.no_of_units == 0) {
        toast.error("Enter number of units");
      } else {
        await fetch(`${baseUrl}/api/v1/users/addInvestment`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(selectedFarm),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Buy farm", data);
            if (data?.code == 200) {
              swal(
                data?.message,
                "check your invesment tab for more info",
                "success"
              );
              setTimeout(() => {
                window.location.reload();
              }, 2000);
            } else {
              toast.error(data?.message);
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }
      this.setState({ isBuying: false });
    });
  };

  componentDidMount() {
    this.setState({ isFetchingFarms: true }, async () => {
      await fetch(`${baseUrl}/api/v1/farms`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.props.token}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          if (data?.data) {
            this.setState({ farms: data.data });
          } else
            toast.error("Unable to get farms.\nCheck your internet connection");
        })
        .catch((error) => {
          console.error("Error:", error);
          toast.error("Unable to get farms.\nCheck your internet connection");
        });
      this.setState({ isFetchingFarms: false });
    });
  }

  render() {
    const { isFetchingFarms, farms, selectedFarm, isBuying } = this.state;
    return (
      <div className="dashboard col-md-12" style={{ height: "100%" }}>
        <div className="farmtitle">
          <h4 style={{ color: "#191D38" }}>Farm List</h4>
          <button
            type="button"
            className="cusBut"
            onClick={() =>
              this.props.toggleModal({ modal: "userboard", isOpen: true })
            }
          >
            Fund wallet
          </button>
        </div>

        <div className="farmList mt-4 p-4">
          <div
            class="table-responsive"
            style={{ overflow: farms.length < 1 ? "hidden" : "auto" }}
          >
            <table class="table farmTable">
              <thead>
                <tr>
                  <th scope="col">Title </th>
                  <th scope="col">Price per unit</th>
                  <th scope="col">Status</th>
                  <th scope="col">Interest</th>
                  <th scope="col">Maturity</th>
                  <th scope="col">Avaliable Units</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              {farms.length > 0 && (
                <tbody>
                  {farms.map((farm, i) => {
                    const color = farm?.status == "closed" ? "red" : "#41EC7B";
                    const trailColor =
                      farm?.status == "closed" ? "#F5F5F5" : "#C3F9D6";
                    const pathColor =
                      farm?.status == "closed" ? "#DAD7E5" : "#0E4944";
                    // const
                    return (
                      <tr key={i}>
                        <td
                          style={{ color, borderTopColor: "#000" }}
                          scope="row"
                        >
                          {farm?.name}
                        </td>
                        <td style={{ color, borderTopColor: "#000" }}>
                          ₦
                          {(farm?.cost_per_unit)
                            .toFixed(2)
                            .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                        </td>
                        <td style={{ color, borderTopColor: "#000" }}>
                          {farm?.status}
                        </td>
                        <td style={{ height: "40px", width: "40px" }}>
                          <CircularProgressbar
                            value={farm?.return}
                            text={`${farm?.return}%`}
                            strokeWidth={15}
                            styles={buildStyles({
                              strokeLinecap: "butt",
                              pathColor,
                              textColor: "#696C7E",
                              trailColor,
                            })}
                          />
                        </td>
                        <td style={{ color, borderTopColor: "#000" }}>
                          {farm?.duration} days
                        </td>
                        <td style={{ color, borderTopColor: "#000" }}>
                          {farm?.no_of_available_units} units
                        </td>
                        <td>
                          <button
                            type="button"
                            className="cusBut"
                            onClick={() => this.handleSelectFarm(farm?._id)}
                          >
                            Buy
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
            </table>
            {farms.length < 1 && (
              <div style={{ textAlign: "center", padding: "10px" }}>
                {isFetchingFarms ? (
                  <Spinner size="lg" />
                ) : (
                  // <div className="emptyList" style={{ fontSize: "20px", fontWeight: "bold" }}>
                  <div className="emptyList">
                    No farms available at the moment
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <Modal show={selectedFarm} onHide={this.closeModal}>
          <Modal.Body className="modalBody">
            <div>
              <div className="modalForm p-2">
                <label for="exampleFormControlInput1">No of Unit(s)</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onChange={(e) => this.setUnits(e.target.value)}
                />
              </div>
              <div
                className="modalForm p-2"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label for="exampleFormControlInput1">Roll over</label>
                <Switch
                  onChange={this.toggleSwitch}
                  checked={this.state?.selectedFarm?.rollover_status}
                />
              </div>
              <div
                className="modalForm p-2 d-flex justify-content-between"
                style={{ width: "100%" }}
              >
                <Button
                  variant="primary"
                  onClick={this.handleBuy}
                  className="formBut1"
                  disabled={isBuying}
                >
                  {isBuying ? <Spinner size="sm" /> : "Buy"}
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    token: state?.auth?.token,
  };
};

export default connect(mapState, { toggleModal })(FarmList);
