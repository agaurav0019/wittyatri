import React from "react";
import { Link } from "react-router-dom";
import wittylogo from "../../assets/wittylogo.jpeg";
import "./TopNav.css"

const TopNav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light topNav">
        <div className="container-fluid mt-1 mb-1">
          <div className="wittyHome ms-3">
            <Link to="/">
              <img className="wittyLogo" src={wittylogo} alt="wittyatri"></img>
              <span className="wittyLabel">Wittyatri</span>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex">
              <div className="d-flex ">
                <div className="logIn me-5">
                  <Link to="/login">Login</Link>
                </div>
                {/* <div className="signUp me-3">
                  <Link to="/signup">Signup</Link>
                </div> */}
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopNav;
