import React from "react";
import "./styles/index.css";

const Input = ({
  className,
  name,
  value,
  onChange,
  placeholder,
  width,
  inputStyle,
  labelStyle,
  label,
}) => {
  return (
    <div className={`input__body ${className}`}>
      <span className={`${labelStyle} input__label`}>{label}</span>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className={`input__main  ${inputStyle}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
