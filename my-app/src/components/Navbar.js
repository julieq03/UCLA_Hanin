import React from "react";
import { NavLink, BrowserRouter as Router, Link } from "react-router-dom";
import logoImage from "../images/logoImage.png";
import logo from "../images/logo.png";
import KclubDropDown from "./KclubDropDown";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logoImageWrapper">
        <Link to="/">
          <img src={logo} alt="logo" className="logoImage" />
        </Link>
      </div>
      <div className="navbarMenu">
        <div>
          <NavLink to="/aboutus" className="linkmenuItem">
            About Us
          </NavLink>
        </div>
        <div>
          <KclubDropDown />
          {/* <NavLink to="/kclubs" className="linkmenuItem">
            K-Clubs
          </NavLink> */}
        </div>
        <div>
          <NavLink to="/loginsignup" className="linkmenuItem">
            Login / Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
