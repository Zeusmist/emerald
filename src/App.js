import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "../src/pages/landing";
import NavBar from "./dashboard/navbar/navBar";
import ScrollToTop from "./scrollToTop";
import GetInTouch from "./ecommerce/GetInTouch";
import Ecommerce from "./ecommerce/Ecommerce";
import AdminNav from "./components/adminDashboard/MainNavBar";
import Account from "./dashboard/account/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./pages/landing/signUp";
import Verify from "./pages/Verify";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <ToastContainer />
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/verify">
              <Verify />
            </Route>
            <Route path="/admindashboard">
              <NavBar />
            </Route>
            <Route path="/adminmessage">
              <NavBar />
            </Route>
            <Route path="/adminmarket">
              <NavBar />
            </Route>
            <Route path="/admins">
              <NavBar />
            </Route>
            <Route path="/adminusers">
              <NavBar />
            </Route>
            <Route path="/userprofile">
              <NavBar />
            </Route>
            <Route path="/investmenthistory">
              <NavBar />
            </Route>
            <Route path="/adminfarmlist">
              <NavBar />
            </Route>
            <Route path="/bookfarm">
              <NavBar />
            </Route>
            <Route path="/dashboard">
              <NavBar />
            </Route>
            <Route path="/getintouch">
              <GetInTouch />
            </Route>
            <Route path="/farm">
              <Ecommerce />
            </Route>
            <Route path="/sliderpage">
              <Ecommerce />
            </Route>
            <Route path="/message">
              <NavBar />
            </Route>
            <Route path="/profile">
              <NavBar />
            </Route>

            <Route path="/newsletter">
              <NavBar />
            </Route>
            <Route path="/readmore">
              <NavBar />
            </Route>
            <Route path="/wallet">
              <NavBar />
            </Route>
            <Route path="/transaction">
              <NavBar />
            </Route>
            <Route path="/investment">
              <NavBar />
            </Route>
            <Route path="/payout">
              <NavBar />
            </Route>
            <Route path="/deposit">
              <NavBar />
            </Route>
            <Route path="/farmlist">
              <NavBar />
            </Route>
            <Route path="/nextofkin">
              <NavBar />
            </Route>
            <Route path="/bankdetails">
              <NavBar />
            </Route>
            <Route path="/change-password">
              <NavBar />
            </Route>
            <Route path="/account">
              {/* <Account /> */}
              <NavBar />
            </Route>
            <Route path="/user/profile">
              <NavBar />
            </Route>
            <Route path="/user/profile">
              <NavBar />
            </Route>
            <Route path="/user/payment-methods">
              <NavBar />
            </Route>
            <Route path="/user/bank-details">
              <NavBar />
            </Route>
            <Route path="/user/change-password">
              <NavBar />
            </Route>
            <Route path="/user/biometrics">
              <NavBar />
            </Route>
            <Route path="/user/investment-history">
              <NavBar />
            </Route>
          </Switch>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
