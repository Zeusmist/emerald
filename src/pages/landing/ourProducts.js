import React, { PureComponent } from "react";
import { ProductCard } from "../../components/cards";
import { Cow, Pig, Wheat } from "../../components/svg";

import "./styles/ourProducts.css";
// import Container from "react-bootstrap/Container";
import { Container, Row, Col } from "react-bootstrap";
import { baseUrl } from "../../config";
import Spinner from "../../components/Spinner";

class OurProducts extends PureComponent {
  state = { farms: [] };

  componentDidMount() {
    this.setState({ isFetchingFarms: true }, async () => {
      await fetch(`${baseUrl}/api/v1/farms?limit=3`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Got advert farms", data);
          if (data?.code == 200) {
            this.setState({ farms: data?.data });
          }
        })
        .catch((e) => console.log(e));

      this.setState({ isFetchingFarms: false });
    });
  }

  render() {
    const { isFetchingFarms, farms } = this.state;
    return (
      <Container fluid style={{ marginBottom: "50px" }}>
        <Row>
          <div className="title">Our Farm Projects</div>
        </Row>
        <Row className="m-auto">
          {isFetchingFarms ? (
            <Spinner size="lg" />
          ) : (
            <>
              {farms.map((item, index) => (
                <ProductCard key={index} product={item} />
              ))}
            </>
          )}
        </Row>
      </Container>
    );
  }
}

// const OurProducts = () => {
//   const data = [
//     {
//       Icon: Cow,
//       title: "Cattle Farm",
//       roi: "18%",
//       amount: "120,000",
//       months: "09",
//       units: "700 / 1000 Unit(s)",
//     },
//     {
//       Icon: Wheat,
//       title: "Cattle Farm",
//       roi: "18%",
//       amount: "120,000",
//       months: "09",
//       units: "700 / 1000 Unit(s)",
//     },
//     {
//       Icon: Pig,
//       title: "Cattle Farm",
//       roi: "18%",
//       amount: "120,000",
//       months: "09",
//       units: "700 / 1000 Unit(s)",
//     },
//   ];
// };

export default OurProducts;
