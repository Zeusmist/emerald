import React, { PureComponent } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addUsers } from "../../redux/actions";
import Spinner from "../Spinner";

const fields1 = [
  { name: "First Name", state: "firstName" },
  { name: "Last Name", state: "lastName" },
  { name: "Email", state: "email" },
];

const fields2 = [
  { name: "Password", state: "password" },
  { name: "Confirm Password", state: "confirmPassword" },
];

class AddAdminModal extends PureComponent {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    role: "admin",
    password: "",
    confirmPassword: "",
  };

  setStateValue = (state, value) => this.setState({ [state]: value });

  handleAddAdmin = () => {
    const { addUsers, getAdmins } = this.props;
    const {
      firstName,
      lastName,
      email,
      role,
      password,
      confirmPassword,
    } = this.state;

    this.setState({ isAdding: true }, async () => {
      await addUsers(
        {
          addingAdmin: true,
          firstName,
          lastName,
          email,
          role,
          password,
          confirmPassword,
        },
        () => {
          this.setState({
            firstName: "",
            lastName: "",
            email: "",
            role: "",
            password: "",
            confirmPassword: "",
          });
          this.props.closeModal();
          getAdmins();
        }
      );
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
              {fields1.map((field, i) => (
                <div className="modalForm p-2">
                  <label for="exampleFormControlInput1">{field.name}</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onChange={(e) =>
                      this.setStateValue(field.state, e.target.value)
                    }
                  />
                </div>
              ))}

              <div className="modalForm p-2">
                <label for="exampleFormControlInput1">Role</label>
                <select
                  class="form-control"
                  aria-label="Default select example"
                  onChange={(e) => this.setStateValue("role", e.target.value)}
                  value={this.state.role}
                >
                  <option value="admin">Admin</option>
                  <option value="superadmin">Super Admin</option>
                </select>
              </div>

              {fields2.map((field, i) => (
                <div className="modalForm p-2">
                  <label for="exampleFormControlInput1">{field.name}</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onChange={(e) =>
                      this.setStateValue(field.state, e.target.value)
                    }
                    placeholder="min of 8 characters"
                  />
                </div>
              ))}

              <div
                className="modalForm p-2 d-flex justify-content-between"
                style={{ width: "100%" }}
              >
                <Button
                  onClick={this.handleAddAdmin}
                  className="formBut1"
                  disabled={isAdding}
                >
                  {isAdding ? <Spinner size="sm" /> : "Add admin"}
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default connect(undefined, { addUsers })(AddAdminModal);
