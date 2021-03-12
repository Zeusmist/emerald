import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "../src/pages/landing";
import NavBar from "./dashboard/navbar/navBar";
import ScrollToTop from "./scrollToTop";
import GetInTouch from './ecommerce/GetInTouch';
import Ecommerce from "./ecommerce/Ecommerce";
import AdminNav from "./components/adminDashboard/MainNavBar"
import Account from "./dashboard/account/index";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
              <SignUp/>
            </Route>
            <Route path='/verify'>
              <Verify/>
            </Route>
            {/* <Route path="/adminDashboard">
              <AdminNav />
            </Route> */}
            <Route path="/adminmessage">
              <AdminNav/>
            </Route>
            <Route path="/adminmarket">
              <AdminNav/>
            </Route>
            <Route path="/admins">
              <AdminNav/>
            </Route>
            <Route path="/adminusers">
              <AdminNav/>
            </Route>
            <Route path="/userprofile">
              <AdminNav/>
            </Route>
            <Route path="/investmenthistory">
              <AdminNav/>
            </Route>
            <Route path="/adminfarmlist">
              <AdminNav/>
            </Route>
            <Route path="/bookfarm">
              <AdminNav/>
            </Route>
            <Route path="/dashboard">
              <NavBar />
            </Route>
            <Route path="/getintouch">
              <GetInTouch/>
            </Route>
            <Route path="/farm">
              <Ecommerce/>
            </Route>
            <Route path="/sliderpage">
              <Ecommerce/>
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
            <Route path="/farmlist">
              <NavBar />
            </Route>
            <Route path="/nextofkin">
              <NavBar />
            </Route>
            <Route path="/bankdetails">
              <NavBar />
            </Route>
            <Route path="/account">
              <Account/>
            </Route>
            <Route path="/user/profile">
              <Account/>
            </Route>
            <Route path="/user/profile">
              <Account/>
            </Route>
            <Route path="/user/payment-methods">
              <Account/>
            </Route>
            <Route path="/user/bank-details">
              <Account/>
            </Route>
            <Route path="/user/change-password">
              <Account/>
            </Route>
            <Route path="/user/biometrics">
              <Account/>
            </Route>
            <Route path="/user/investment-history">
              <Account/>
            </Route>
          </Switch>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
