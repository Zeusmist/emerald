import React, { PureComponent } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { baseUrl } from "../../config";
import { addUsers } from "../../redux/actions";
import Spinner from "../Spinner";

const fields1 = [
  { name: "Farm Name", state: "name" },
  { name: "Return on investment", state: "return_value", type: "number" },
  { name: "Duration", state: "duration", type: "number" },
  { name: "Cost per unit", state: "cost_per_unit", type: "number" },
  { name: "Available units", state: "no_of_available_units", type: "number" },
];

const fields2 = [
  { name: "Start Date", state: "availability_date" },
  { name: "Closing Date", state: "closing_date" },
  { name: "Description", state: "description", type: "textarea" },
];

class AddFarmModal extends PureComponent {
  state = {
    name: "",
    return_value: "1",
    duration: "1",
    cost_per_unit: "1",
    no_of_available_units: "1",
    availability_date: "",
    closing_date: "",
    description: "",
    image: "",
  };

  setStateValue = (state, value, type) => {
    if (type == "number") {
      value = value.replace(/[^0-9]/g, "");
    }
    this.setState({ [state]: value });
  };

  handleAddFarm = (e) => {
    e.preventDefault();
    this.setState({ isAdding: true }, async () => {
      const formdata = new FormData();
      const {
        name,
        return_value,
        duration,
        cost_per_unit,
        no_of_available_units,
        availability_date,
        closing_date,
        description,
        image,
      } = this.state;
      console.log({
        name,
        return_value,
        duration,
        cost_per_unit,
        no_of_available_units,
        availability_date,
        closing_date,
        description,
        image,
      });
      formdata.append("name", name);
      formdata.append("return", return_value);
      formdata.append("duration", duration);
      formdata.append("cost_per_unit", cost_per_unit);
      formdata.append("no_of_available_units", no_of_available_units);
      formdata.append(
        "availability_date",
        new Date(availability_date).toISOString()
      );
      formdata.append("closing_date", new Date(closing_date).toISOString());
      formdata.append("description", description);
      formdata.append("image", image);

      await fetch(`${baseUrl}/api/v1/admin/addFarm`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.props.token}`,
          "Content-Type": "multipart/form-data",
        },
        body: formdata,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Create farm data", data);
          if (data?.code == 200) {
            toast.success(data?.message);
          } else {
            toast.error(data?.message);
          }
        })
        .catch((e) => console.log(e));

      this.setState({ isAdding: false });
    });
  };

  render() {
    const { isOpen, closeModal } = this.props;
    const { isAdding } = this.state;
    return (
      <>
        <Modal show={isOpen} onHide={closeModal}>
          <Modal.Body className="modalBody">
            <div>
              <form onSubmit={this.handleAddFarm}>
                {fields1.map((field, i) => (
                  <div className="modalForm p-2">
                    <label for="exampleFormControlInput1">{field.name}</label>
                    {field.type == "number" ? (
                      <div style={{ display: "flex" }}>
                        <div className="inputIcon">
                          {field.state == "cost_per_unit"
                            ? "₦"
                            : field.state == "return_value"
                            ? "%"
                            : field?.state == "duration"
                            ? "day(s)"
                            : ""}
                        </div>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          onChange={(e) =>
                            this.setStateValue(
                              field.state,
                              e.target.value,
                              field?.type
                            )
                          }
                          value={this.state[field?.state]}
                          style={{ position: "relative", left: "-5px" }}
                        />
                      </div>
                    ) : (
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        onChange={(e) =>
                          this.setStateValue(
                            field.state,
                            e.target.value,
                            field?.type
                          )
                        }
                        value={this.state[field?.state]}
                      />
                    )}
                  </div>
                ))}

                <div className="modalForm p-2">
                  <label for="exampleFormControlInput1">Start Date</label>
                  <input
                    type="date"
                    class="form-control"
                    onChange={(e) =>
                      this.setStateValue("availability_date", e.target.value)
                    }
                    value={this.state.availability_date}
                  />
                </div>

                <div className="modalForm p-2">
                  <label for="exampleFormControlInput1">Closing Date</label>
                  <input
                    type="date"
                    class="form-control"
                    onChange={(e) =>
                      this.setStateValue("closing_date", e.target.value)
                    }
                    value={this.state.closing_date}
                  />
                </div>

                <div className="modalForm p-2">
                  <label for="exampleFormControlInput1">Description</label>
                  <textarea class="form-control" rows="4"></textarea>
                </div>

                <div className="modalForm p-2">
                  <label for="exampleFormControlInput1">Image</label>
                  <input
                    class="form-control"
                    type="file"
                    accept="image/x-png,image/gif,image/jpeg"
                    onChange={(e) =>
                      this.setStateValue("image", e.target.files[0])
                    }
                  />
                </div>

                <div
                  className="modalForm p-2 d-flex justify-content-between"
                  style={{ width: "100%" }}
                >
                  <Button
                    onClick={this.handleAddFarm}
                    className="formBut1"
                    disabled={isAdding}
                    type="submit"
                  >
                    {isAdding ? <Spinner size="sm" /> : "Add farm"}
                  </Button>
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default connect((state) => ({ token: state.auth?.token }), { addUsers })(
  AddFarmModal
);
