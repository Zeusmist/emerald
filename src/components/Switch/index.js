import React, { useState } from "react";
import "./styles/index.css";

const Switch = () => {
  const [state, setState] = useState(false);
  return (
    <div
      onClick={() => setState(!state)}
      className={`switch__body ${state && "alt"}`}
    >
      <div className={`switch__control ${state && "alt"}`}></div>
    </div>
  );
};

export default Switch;
