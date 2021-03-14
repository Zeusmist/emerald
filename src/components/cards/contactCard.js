import React from "react";
import { Col } from "react-bootstrap";
import "./styles/contactCard.css";

const ContactCard = ({ data, alt }) => {
  return (
    <Col className={`contactCard ${alt && "alt"}`} lg style={{ width: "100%" }}>
      <div className={`contactCard__title ${alt && "alt"}`}>{data?.title}</div>
      <div className={`contactCard__sub ${alt && "alt"}`}>{data?.content}</div>
      <div className={`contactCard__button ${alt && "alt"}`}>
        {data?.action}
      </div>
    </Col>
  );
};

export default ContactCard;
