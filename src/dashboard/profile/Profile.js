import React from "react";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const history = useHistory();

  return (
    <div style={{ height: "100%" }}>
      <div className="row col-md-12 d-flex justify-content-center">
        <button type="button" className="butGroup col-md-3 col-sm-3">
          Profile
        </button>
        <button
          type="button"
          className="butGroup col-md-3 col-sm-3"
          onClick={() => history.push("/nextofkin")}
        >
          Next of kin
        </button>
        <button
          type="button"
          className="butGroup col-md-3 col-sm-3"
          onClick={() => history.push("/bankdetails")}
        >
          Bank Details
        </button>
      </div>
      <div className="col-md-12 d-flex justify-content-center mt-1">
        <div className="meProfile"></div>
      </div>
      <p className="col-md-12 text-center">
        Nnamdi Emeka
        <br />
        <small className="col-md-12 d-flex justify-content-center">
          User@gmail.com
        </small>
      </p>

      <div className="formCard">
        <div className="profForm">
          <div>
            <label for="exampleFormControlInput1">First Name</label>
            <input type="text" class="form-control" />
          </div>

          <div>
            <label for="exampleFormControlInput1">Middle Name</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <div className="profForm">
          <div>
            <label for="exampleFormControlInput1">Email</label>
            <input type="email" class="form-control" />
          </div>

          <div>
            <label for="exampleFormControlInput1">Phone Number</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <div className="profForm">
          <div>
            <label for="exampleFormControlInput1">Address</label>
            <input type="email" class="form-control" />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: 300,
            }}
          >
            <span>
              <label for="exampleFormControlInput1">City</label>
              <input type="text" class="form-control cutForm" />
            </span>
            <span>
              <label for="exampleFormControlInput1">Date of Birth</label>
              <input type="date" class="form-control cutForm" />
            </span>
          </div>
        </div>

        <div className="profForm">
          <div>
            <label for="exampleFormControlInput1">State</label>
            <select
              class="form-select byThree"
              aria-label="Default select example"
            >
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div>
            <label for="exampleFormControlInput1">Country</label>
            <select
              class="form-select byThree"
              aria-label="Default select example"
            >
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div>
            <label for="exampleFormControlInput1">Zipcode</label>
            <input type="text" class="form-control byThree" />
          </div>
        </div>

        <div className="profForm">
          <div>
            <label for="exampleFormControlInput1">Passport</label>
            <input type="text" class="form-control" />
          </div>

          <div style={{ visibility: "hidden" }}>
            <label for="exampleFormControlInput1">Middle Name</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <div className="profForm">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: 300,
            }}
          >
            <span>
              <button className="formBut1">Save Changes</button>
            </span>
            <span>
              <button className="formBut2">Edit here</button>
            </span>
          </div>

          <div style={{ visibility: "hidden" }}>
            <label for="exampleFormControlInput1">Middle Name</label>
            <input type="text" class="form-control" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
