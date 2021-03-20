import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ContactCard } from "../../components/cards";
import "./styles/getStarted.css";

const GetStarted = () => {
  const data = [
    {
      title: "Get Started",
      content: "Signing up today and start making profit as a farmer on the Go",
      action: "Create an Account",
      href: "/signup",
      alt: false,
    },
    {
      title: "Get In Touch",
      content: " If any issues, send us a mail and we will contact you",
      action: "Contact Us",
      href: "/getintouch",
      alt: true,
    },
  ];
  return (
    <Container fluid style={{ padding: 0 }}>
      <Row className="m-auto">
        {data.map((item, i) => (
          <ContactCard data={item} alt={item.alt} />
        ))}
        {/* <ContactCard data={data[1]} alt /> */}
        {/* <div className="getStarted"></div> */}
      </Row>
    </Container>
  );
};

export default GetStarted;
