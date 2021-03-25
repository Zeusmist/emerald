import React from "react";
import { Line } from "../svg";

import "./styles/productCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <div className="imageHolderHolder">
        <div
          className="imageHolder"
          style={{
            // width: 40,
            // height: 40,
            // borderRadius: 100,
            backgroundImage: `url(${product?.imageUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div className="product__content">
        <div className="top">
          <span className="top__main">{product?.name}</span>
          <span className="top__sub">{product?.return}%</span>
          <span className="top__roi_sub">ROI</span>
        </div>
        <div className="middle">
          <div className="middle__content">
            <div className="number">
              <span className="month__number__light">₦</span>
              <span className="middleMain">{product?.cost_per_unit}</span>
              <span className="month__number__light">.00</span>
            </div>
            <span className="card_underText">Amount per unit</span>
          </div>
          <div />
          <span style={{ padding: "0px 10px", marginTop: "2%" }}>
            <Line />
          </span>
          <div className="middle__content">
            <span className="month__number">{product?.duration}</span>
            <span className="card_underText">Days</span>
          </div>
        </div>
        <div className="bottom">
          <div>{product?.no_of_available_units} units available</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
