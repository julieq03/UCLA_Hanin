import React, { useState, useContext, useEffect } from "react";
import { NavLink, BrowserRouter as Router, Link } from "react-router-dom";
import logoImage from "../images/logoImage.png";
import logo from "../images/logo.png";
import KclubDropDown from "./KclubDropDown";
import { AccountContext } from "./Account";
import Pool from "../service/userPool";

const Navbar = () => {
  const [status, setStatus] = useState(false); //status : loggedin : true, if not: false
  const [user, setUser] = useState(null);

  const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
      setStatus(false);
      setUser(null);
    }
  };

  // const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    const user = Pool.getCurrentUser();
    if (user) {
      setUser(user);
      setStatus(true);
    } else {
      console.log("아무도 로그인 안했음.");
    }
  });

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
          {status ? (
            <NavLink to="/myprofile" className="linkmenuItem">
              My Profile
            </NavLink>
          ) : (
            <NavLink to="/loginsignup" className="linkmenuItem">
              Login / Sign Up
            </NavLink>
          )}
        </div>

        <div>
          {status ? (
            <span className="linkmenuItem" onClick={logout}>
              Log out
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
