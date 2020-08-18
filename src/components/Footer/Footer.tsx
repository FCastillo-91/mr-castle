import * as React from "react";

export const Footer = () => {
  return (
    <footer>
      <div
        className="footer-container"
        style={{ backgroundColor: "#343a40", color: "white" }}
      >
        <h2>I AM A FOOTER CONTAINER</h2>
        <div className="row">
          <div className="footer-contact-info col-sm-6">
            <p>GET IN TOUCH</p>
            <ul>Email:</ul>
            <ul>Address:</ul>
            <ul>Telephone:</ul>
          </div>
          <div className="footer-social-info col-sm-6">
            <ul>INSTA ICON</ul>
            <ul>PINTEREST ICON:</ul>
            <ul>FB ICON</ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
