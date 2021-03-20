import React from "react";
import { Col } from "react-bootstrap";
import { useHistory } from "react-router";
import "./styles/contactCard.css";

const ContactCard = ({ data, alt }) => {
  const history = useHistory();
  return (
    <Col className={`contactCard ${alt && "alt"}`} lg style={{ width: "100%" }}>
      <div className={`contactCard__title ${alt && "alt"}`}>{data?.title}</div>
      <div className={`contactCard__sub ${alt && "alt"}`}>{data?.content}</div>
      <div
        className={`contactCard__button ${alt && "alt"}`}
        onClick={() => history.push(data.href)}
        style={{ cursor: "pointer" }}
      >
        {data?.action}
      </div>
    </Col>
  );
};

export default ContactCard;
