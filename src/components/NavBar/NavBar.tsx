import * as React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="sticky-top bg-dark p-4">
      <nav className="navbar navbar-dark bg-dark">
        <li className="nav-item">
          <a className="nav-link" href="#">
            <img
              src="/docs/4.5/assets/brand/bootstrap-solid.svg"
              width="30"
              height="30"
              alt=""
              loading="lazy"
            />
          </a>
        </li>
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
      </nav>
    </div>
  );
};
