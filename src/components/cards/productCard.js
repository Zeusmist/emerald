import React from "react";
import { Line } from "../svg";

import "./styles/productCard.css";

const ProductCard = ({ Icon, title, roi, amount, months, units }) => {
  return (
    <div className="card">
      <div className="imageHolder">
        <Icon className="image" />
      </div>
      <div className="product__content">
        <div className="top">
          <span className="top__main">{title}</span>
          <span className="top__sub">{roi}</span>
          <span className="top__roi_sub">ROI</span>
        </div>
        <div className="middle">
          <div className="middle__content">
            <div className="number">
              <span className="month__number__light">₦</span>
              <span className="middleMain">{amount}</span>
              <span className="month__number__light">.00</span>
            </div>
            <span className="card_underText">Amount per unit</span>
          </div>
          <div />
          <span style={{ padding: "0px 10px", marginTop: "2%" }}>
            <Line />
          </span>
          <div className="middle__content">
            <span className="month__number">{months}</span>
            <span className="card_underText">Months</span>
          </div>
        </div>
        <div className="bottom">
          <div className="bar">
            <div className="slider"></div>
          </div>
          <div>{units}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
