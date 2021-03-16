import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { baseUrl } from "../../config";
import ProfileHeader from "./ProfileHeader";
import nigerianStates from "./nigerianStates";
import { toast } from "react-toastify";
import { updateUser } from "../../redux/actions";
import Spinner from "../../components/Spinner";

const formRows = [
  [
    { name: "First Name", state: "firstName" },
    { name: "Last Name", state: "lastName" },
  ],
  [
    { name: "Middle Name", state: "middleName" },
    { name: "Email", state: "email", type: "email" },
  ],
  [
    { name: "Phone Number", state: "phoneNumber", validationType: "number" },
    { name: "Address", state: "address" },
  ],
];

class Profile extends PureComponent {
  constructor(props) {
    super(props);
    const data = {
      firstName: props?.firstName,
      lastName: props?.lastName,
      middleName: props?.middleName,
      email: props?.email,
      phoneNumber: props?.phoneNumber,
      address: props?.address,
      city: props?.city,
      dob: props?.dob,
      state: props?.state,
      country: props?.country,
      zipcode: props?.zipcode,
    };
    this.initialUserData = data;
    this.state = {
      userData: data,
    };
  }

  checkFieldChanges = () => {
    let changes = {};
    for (const field in this.state.userData) {
      if (this.state.userData[field] != this.initialUserData[field]) {
        changes[field] = this.state.userData[field];
      }
    }
    console.log("changes", changes);
    return changes;
  };

  handleChangeField = (state, value, validationType) => {
    if (validationType == "number") {
      value = value.replace(/[^0-9]/g, "");
    }

    this.setState({ userData: { ...this.state.userData, [state]: value } });
  };

  handleSaveChanges = () => {
    this.setState({ isSaving: true }, async () => {
      const changes = this.checkFieldChanges();
      if (Object.keys(changes).length == 0) {
        toast.info("No changes made");
        this.setState({ isSaving: false });
        return;
      }
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
            {/* <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: 300,
              }}
            > */}
            <div>
              <label className="formLabel" for="exampleFormControlInput1">
                City
              </label>
              <input
                type="text"
                class="form-control "
                onChange={(e) => this.handleChangeField("city", e.target.value)}
                value={this.state.userData.city}
              />
            </div>
            <div>
              <label className="formLabel" for="exampleFormControlInput1">
                Date of Birth
              </label>
              <input
                type="date"
                class="form-control "
                onChange={(e) => this.handleChangeField("dob", e.target.value)}
                value={this.state.userData.dob}
              />
            </div>
            {/* </div> */}
          </div>

          <div className="profForm">
            <div>
              <label className="formLabel" for="exampleFormControlInput1">
                State
              </label>
              <select
                class="form-control"
                aria-label="Default select example"
                onChange={(e) =>
                  this.handleChangeField("state", e.target.value)
                }
                value={this.state.userData?.state}
              >
                {nigerianStates.map((state, i) => (
                  <option key={i} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="formLabel" for="exampleFormControlInput1">
                Country
              </label>
              <input
                type="text"
                class="form-control"
                disabled
                value={this.state.userData.country}
              />
              {/* <select
                class="form-select byThree"
                aria-label="Default select example"
                onChange={(e) =>
                  this.handleChangeField("country", e.target.value)
                }
                value={this.state.userData.country}
              >
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select> */}
            </div>
          </div>

          <div className="profForm">
            <div>
              <label className="formLabel" for="exampleFormControlInput1">
                Zipcode
              </label>
              <input
                type="text"
                class="form-control"
                onChange={(e) =>
                  this.handleChangeField("zipcode", e.target.value)
                }
                value={this.state.userData.zipcode}
              />
            </div>
            {/* <div>
              <label className="formLabel" for="exampleFormControlInput1">Passport</label>
              <input type="text" class="form-control" />
            </div> */}
          </div>

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
    ...auth,
    country: "Nigeria",
  };
};

export default connect(mapState, { updateUser })(Profile);
