import React from "react";
import "./styles/styles.css";
import logo from "./images/emerald-farm-logo.png"
// import {Link} from "react-router-dom"
import Login from "../pages/landing/login";
// import { Modal} from 'react-bootstrap'
import Modal from 'react-modal';
import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";

const customStyles = {
  content : {
    border: "none",
    background:"none"
  }
};

const Header = (props) => {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  
    const handleLogin=(e)=>{
      e.preventDefault();
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
      }
  return (
    <>
        {/* <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
<Login />
        </Modal> */}
         <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
<Login closeModal={closeModal}/>
        </Modal>
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ background: "#0E4944" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="emerald-logo"  />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Contact
              </a>
            </li><li className="nav-item">
              <a className="nav-link active" href="/">
                Farm Project
              </a>
            </li><li className="nav-item">
              <a className="nav-link active" href="/">
                F.A.Q
              </a>
            </li><li className="nav-item">
              <a className="nav-link active" href="/">
                Blog
              </a>
            </li>
          </ul>
          <form className="d-flex">
            {/* <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            /> */}
            <button className="btn me-2 login-button" type="submit" onClick={handleLogin}>
              Log in
            </button>
            <button className="btn register-button" type="submit">
              <Link to="/signup">Register</Link>
            </button>
          </form>
        </div>
      </div>
    </nav>
    </>
  );
};
export default Header;
