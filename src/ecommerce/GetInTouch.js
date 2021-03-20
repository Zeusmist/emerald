/* eslint-disable */
/* eslint-disable */

import React from "react";
import "./ecomStyle.css";
import { Brand } from "./svgs";

const GetInTouch = () => {
  return (
    <>
      <div className="row m-0">
        <div className="col-md-6 col-sm-12 p-5">
          <Brand />
          <h1 className="emeraldp" style={{ fontWeight: "normal" }}>
            Emerald Farms
          </h1>
          <hr style={{ width: 250, color: "#41EC7B", height: 6 }}></hr>
          <small className="addMed">Contacts</small>
          <br />
          <br />
          <small className="addSmall">Address</small>
          <br />
          <br />
          <small className="addSmall">Contact No</small>
          <br />
          <br />
          <small className="addSmall">Email Address</small>
          <br />
          <br />
          <small className="addSmall">Want to create an account?</small>
          <br />
          <br />
          <small className="addSmallextra">Click here</small>
        </div>
        <div className="col-md-6 col-sm-12 p-5">
          <div
            className="p-3 pb-5 pt-5"
            style={{ backgroundColor: "#EBFFF2", width: "100%" }}
          >
            <small className="getInTouch">Get in Touch</small>
            <br />
            <br />
            <label for="exampleFormControlInput1">Name</label>
            <input type="text" class="addForm" />
            <label for="exampleFormControlInput1">Email</label>
            <input type="text" class="addForm" />
            <label for="exampleFormControlInput1">Subject</label>
            <input type="text" class="addForm" />
            <label for="exampleFormControlInput1">Your message</label>
            <textarea type="text" class="addForm" />
            <br />
            <button className="addBut">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
