import React from "react";
import "./styles/contactCard.css";

const ContactCard = ({ data, alt }) => {
  return (
    <div className={`contactCard ${alt && "alt"}`}>
      <div className={`contactCard__title ${alt && "alt"}`}>{data?.title}</div>
      <div className={`contactCard__sub ${alt && "alt"}`}>{data?.content}</div>
      <div className={`contactCard__button ${alt && "alt"}`}>
        {data?.action}
      </div>
    </div>
  );
};

export default ContactCard;
