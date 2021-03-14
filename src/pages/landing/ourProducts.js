import React from "react";
import { ProductCard } from "../../components/cards";
import { Cow, Pig, Wheat } from "../../components/svg";

import "./styles/ourProducts.css";
// import Container from "react-bootstrap/Container";
import { Container, Row, Col } from "react-bootstrap";

const OurProducts = () => {
  const data = [
    {
      Icon: Cow,
      title: "Cattle Farm",
      roi: "18%",
      amount: "120,000",
      months: "09",
      units: "700 / 1000 Unit(s)",
    },
    {
      Icon: Wheat,
      title: "Cattle Farm",
      roi: "18%",
      amount: "120,000",
      months: "09",
      units: "700 / 1000 Unit(s)",
    },
    {
      Icon: Pig,
      title: "Cattle Farm",
      roi: "18%",
      amount: "120,000",
      months: "09",
      units: "700 / 1000 Unit(s)",
    },
  ];

  return (
    <Container fluid>
      <Row>
        <div className="title">Our Farm Projects</div>
      </Row>
      <Row className="m-auto">
        {/* <div className="cardHolder"> */}
        {data.map((item, index) => (
          <ProductCard key={index} {...item} key={index} />
        ))}
        {/* </div> */}
      </Row>
    </Container>
    // <div className="products">
    // </div>
  );
};

export default OurProducts;
