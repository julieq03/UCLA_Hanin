import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-upperLeft">
          <Link to="/">
            <img src={logo} alt="logo" className="logoImage" />
          </Link>
        </div>
        <div className="footer-link-upperRight">
          <div class="footer-link-items">
            <span>About Us</span>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <span>K-Clubs</span>
            <Link to="/">KOJOBS</Link>
            <Link to="/">KUBS</Link>
            <Link to="/">KSEA</Link>
          </div>
          <div class="footer-link-items">
            <span>Community</span>
            <Link to="/"></Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
