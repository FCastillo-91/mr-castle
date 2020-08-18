import * as React from "react";
import { Link } from "react-router-dom";
import logo from "../../ui/logo/MRCASTLE_Logo_Design.png";

export const NavBar = () => {
  return (
    <div className="sticky-top bg-dark p-4" style={{ fontFamily: "Monserrat", fontWeight: "bold" }}>
      <nav className="navbar navbar-dark bg-dark">
        <div className="nav-item">
          <a className="nav-link" href="/">
            <img
              src={logo}
              width="70"
              height="70"
              alt="Mr Castle small logo"
              loading="lazy"
            />
          </a>
        </div>
        <div className="nav-item">
          <Link to="/">HOME</Link>
        </div>
        <div className="nav-item">
          <Link to="/about">ABOUT</Link>
        </div>
        <div className="nav-item">
          <Link to="/products">PRODUCTS</Link>
        </div>
        <div className="nav-item">
          <Link to="/gallery">GALLERY</Link>
        </div>
        <div className="nav-item">
          <Link to="/contact">CONTACT</Link>
        </div>
      </nav>
    </div>
  );
};
