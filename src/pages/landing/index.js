import React, { useEffect } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import HomeCarousel from "./carousel";
import OurProducts from "./ourProducts";
import GetStarted from "./getStarted";
import { useHistory } from "react-router";
import { connect } from "react-redux";
// import Login from "./login";

const Landing = ({ token, role }) => {
  const history = useHistory();
  useEffect(() => {
    if (token) {
      history.push(role == "user" ? "/dashboard" : "/admindashboard");
    }
  }, []);
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

const mapState = (state) => {
  return {
    token: state.auth?.token,
    role: state.auth?.role,
  };
};

export default connect(mapState)(Landing);
