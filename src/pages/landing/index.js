import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import HomeCarousel from "./carousel";
import OurProducts from "./ourProducts";
import GetStarted from "./getStarted";
// import Login from "./login";

const Landing = () => {
  return (
    <div>
      <Header />
      {/* <Login /> */}
      <HomeCarousel />
      <OurProducts />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Landing;
