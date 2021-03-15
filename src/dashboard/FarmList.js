/* eslint-disable */

import React, { PureComponent } from "react";
import "./navbar/navStyle.css";
import { Button, Modal, Spinner } from "react-bootstrap";
import { baseUrl } from "../config";
import { connect } from "react-redux";
import { toast } from "react-toastify";

class FarmList extends PureComponent {
  state = {
    show: false,
    farms: [],
  };

  toggleModal = () => this.setState((prev) => ({ show: !prev.show }));

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
    const { show, isFetchingFarms, farms } = this.state;
    return (
      <div className="dashboard col-md-12" style={{ height: "100%" }}>
        <div className="farmtitle">
          <h4 style={{ color: "#191D38" }}>Farm List</h4>
          <button type="button" className="cusBut">
            Fund wallet
          </button>
        </div>

        <div className="farmList mt-4 p-4">
          <div
            class="table-responsive"
            style={{ overflow: farms.length < 1 ? "hidden" : "auto" }}
          >
            <table class="table">
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
                  {farms.map((farm, i) => (
                    <tr key={i}>
                      <td scope="row">{farm?.name}</td>
                      <td>
                        ₦
                        {(farm?.cost_per_unit)
                          .toFixed(2)
                          .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                      </td>
                      <td>{farm?.status}</td>
                      <td>{farm?.return}%</td>
                      <td>{farm?.duration} days</td>
                      <td>{farm?.no_of_available_units} units</td>
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
              )}
            </table>
            {farms.length < 1 && (
              <div style={{ textAlign: "center" }}>
                {isFetchingFarms ? (
                  <Spinner animation="border" role="status" size="">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                ) : (
                  <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                    No farms available at the moment
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <Modal show={show} onHide={this.toggleModal}>
          <Modal.Body className="modalBody">
            <div>
              <div className="modalForm p-2">
                <label for="exampleFormControlInput1">
                  Investment Category
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>

              <div className="modalForm p-2">
                <label for="exampleFormControlInput1">No of Unit</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>

              <div className="modalForm p-2">
                <label for="exampleFormControlInput1">Duration</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>

              <div className="modalForm p-2">
                <label for="exampleFormControlInput1">Amount</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>

              <div className="modalForm p-2">
                <label for="exampleFormControlInput1">Payment Method</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>

              <div
                className="modalForm p-2 d-flex justify-content-between"
                style={{ width: "100%" }}
              >
                <Button variant="primary" onClick={this.toggleModal}>
                  Save Changes
                </Button>
                <label className="switched">
                  <input type="checkbox" unchecked />
                  <span className="slider round"></span>
                </label>
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

export default connect(mapState)(FarmList);
