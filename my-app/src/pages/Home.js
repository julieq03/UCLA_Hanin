import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import roycehall from "../images/roycehall.jpeg";
import kojobsImage from "../images/kojobs.png";
import kubsImage from "../images/kubs.png";
import kseaImage from "../images/ksea.png";
import { NavLink, BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <React.Fragment>
      <Navbar />
      {/* <h1 className="homepageBannerTitle">UCLA Koreans</h1>
      <img src={roycehall} alt="homepageBanner" className="homepageBannerImg" /> */}
      <div
        className="homepageBanner"
        style={{ backgroundImage: `url(${roycehall})` }}
      >
        <div className="homepageBannerTitle">
          <h1>UCLA</h1>
          <h2>Koreans Association</h2>
          <NavLink to="/aboutus" className="linkmenuItem">
            Learn more ➜
          </NavLink>
        </div>
      </div>
      <div class="kClubIntro">
        <h1>UCLA 한인 동아리</h1>
        <div class="kClubList">
          <div className="kClubBanner">
            <article
              className="kClubImage"
              style={{ backgroundImage: `url(${kojobsImage})` }}
            >
              {/* <h1>KOJOBS</h1> */}
            </article>
            <a
              href="https://www.instagram.com/kojobs_ucla/"
              target="_blank"
              className="socialIcons"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="socialMediaIcon"
              ></FontAwesomeIcon>
            </a>
            <a href="#">
              <h1>KOJOBS</h1>
            </a>
          </div>

          <div className="kClubBanner">
            <article
              className="kClubImage"
              style={{ backgroundImage: `url(${kubsImage})` }}
            >
              {/* <h1>KUBS</h1> */}
            </article>
            <a
              href="https://www.instagram.com/ucla_kubs/"
              target="_blank"
              className="socialIcons"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="socialMediaIcon"
              ></FontAwesomeIcon>
            </a>
            <a href="#">
              <h1>KUBS</h1>
            </a>
          </div>
          <div className="kClubBanner">
            <article
              className="kClubImage"
              style={{ backgroundImage: `url(${kseaImage})` }}
            >
              {/* <h1>KSEA</h1> */}
            </article>
            <a
              href="https://www.instagram.com/bruinksea/"
              target="_blank"
              className="socialIcons"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="socialMediaIcon"
              ></FontAwesomeIcon>
            </a>
            <a href="#">
              <h1>KSEA</h1>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
