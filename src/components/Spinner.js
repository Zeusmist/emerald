import React from "react";
import { Spinner } from "react-bootstrap";

export default ({ size, animation = "border" }) => (
  <Spinner animation={animation} role="status" size={size}>
    <span className="sr-only">Loading...</span>
  </Spinner>
);
