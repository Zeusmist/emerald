import React from "react";
import "./styles/index.css";

const Button = ({ children, text, Icon, main, sub, className, border }) => {
  return (
    <button
      className={`form_button ${className}`}
      style={{ background: main, color: sub, border }}
    >
      {Icon && <Icon />} {text ? text : children}{" "}
    </button>
  );
};

export default Button;
