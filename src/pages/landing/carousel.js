import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "./images/carouselImage1.png";
import "./styles/carousel.css";

export default function HomeCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="carousel-div">
          <div className="carousel-div-mainText">Farm Projects</div>
          <div className="carousel-div-subText">
            Investing in farm produce such as pork, wheat, etc.
          </div>
          <button
            className="btn me-2 join-button"
            onClick={() => (window.location.pathname = "/signup")}
          >
            Join Today
          </button>
        </div>
        <img src={logo} alt="first-carousel" className="carouselImage1" />
      </div>
      {/* <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div> */}
    </Slider>
  );
}
