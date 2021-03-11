import React from "react";
import { ProductCard } from "../../components/cards";
import { Cow, Pig, Wheat } from "../../components/svg";

import "./styles/ourProducts.css";

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
    <div className="products">
      <div className="title">Our Farm Projects</div>
      <div className="cardHolder">
        {data.map((item, index) => {
          return <ProductCard {...item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default OurProducts;
