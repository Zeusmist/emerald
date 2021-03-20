import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";
import { updateUser } from "../../redux/actions";
import ProfileHeader from "./ProfileHeader";

const formRows = [
  [
    { name: "First Name", state: "FirstName" },
    { name: "Last Name", state: "LastName" },
  ],
  [
    { name: "Email", state: "Email", type: "email" },
    { name: "Phone Number", state: "Phone", validationType: "number" },
  ],
  [{ name: "Address", state: "Address" }],
];

class NextOfKin extends PureComponent {
  constructor(props) {
    super(props);
    const data = {
      FirstName: props?.FirstName,
      LastName: props?.LastName,
      Email: props?.Email,
      Phone: props?.Phone,
      Address: props?.Address,
    };
    this.initialUserData = data;
    this.state = {
      userData: data,
    };
  }

  handleChangeField = (state, value, validationType) => {
    if (validationType == "number") {
      value = value.replace(/[^0-9]/g, "");
    }

    this.setState({ userData: { ...this.state.userData, [state]: value } });
  };

  checkFieldChanges = () => {
    let changes = {};
    for (const field in this.state.userData) {
      if (this.state.userData[field] != this.initialUserData[field]) {
        changes[`nextOfKin${field}`] = this.state.userData[field];
      }
    }
    console.log("changes", changes);
    return changes;
  };

  handleSaveChanges = () => {
    this.setState({ isSaving: true }, async () => {
      let changes = this.checkFieldChanges();
      if (Object.keys(changes).length == 0) {
        toast.info("No changes made");
        this.setState({ isSaving: false });
        return;
      }
      changes.nextOfKin = true;
      const { updateUser, token } = this.props;
      await updateUser({ token, changes });
      this.setState({ isSaving: false });
    });
  };

  render() {
    const { isSaving } = this.state;
    return (
      <div style={{ height: "100%" }}>
        <ProfileHeader />

        <div className="formCard">
          {formRows.map((row, i) => (
            <div className="profForm">
              {row.map((field, i) => (
                <div>
                  <label className="formLabel" for="exampleFormControlInput1">
                    {field.name}
                  </label>
                  <input
                    type={field?.type || "text"}
                    class="form-control"
                    onChange={(e) =>
                      this.handleChangeField(
                        field.state,
                        e.target.value,
                        field?.validationType
                      )
                    }
                    value={this.state.userData[field.state]}
                  />
                </div>
              ))}
            </div>
          ))}

          <div className="profForm">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                // width: 300,
              }}
            >
              <span>
                <button
                  className="formBut1"
                  onClick={this.handleSaveChanges}
                  disabled={isSaving}
                >
                  {isSaving ? <Spinner size="sm" /> : "Save Changes"}
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  const { auth } = state;

  return {
    token: auth?.token,
    FirstName: auth?.nextOfKinFirstName,
    LastName: auth?.nextOfKinLastName,
    Email: auth?.nextOfKinEmail,
    Phone: auth?.nextOfKinPhone,
    Address: auth?.nextOfKinAddress,
  };
};

export default connect(mapState, { updateUser })(NextOfKin);
