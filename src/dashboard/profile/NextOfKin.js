import React from "react";
import { useHistory } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";

const NextOfKin = () => {
  const history = useHistory();
  return (
    <div style={{ height: "100%" }}>
      <ProfileHeader />

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

export default NextOfKin;
