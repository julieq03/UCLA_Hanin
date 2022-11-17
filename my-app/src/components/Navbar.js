import React, { useState, useContext, useEffect } from "react";
import { NavLink, BrowserRouter as Router, Link } from "react-router-dom";
import logoImage from "../images/logoImage.png";
import logo from "../images/logo.png";
import KclubDropDown from "./KclubDropDown";
import AboutUsDropDown from "./AboutUsDropDown";
import { AccountContext } from "./Account";
import Pool from "../service/userPool";
import Dropdown from "rsuite/Dropdown";
import "rsuite/dist/rsuite.min.css";

const Navbar = () => {
  const [status, setStatus] = useState(false); //status : loggedin : true, if not: false
  const [user, setUser] = useState(null);

  const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
      setStatus(false);
      setUser(null);
      window.location.reload();
    }
  };

  // const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    const user = Pool.getCurrentUser();
    if (user) {
      setUser(user);
      setStatus(true);
    } else {
      // console.log("아무도 로그인 안했음.");
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
        {/* <div>
          <NavLink to="/aboutus" className="linkmenuItem">
            About Us
          </NavLink>
        </div> */}
        <div className="dropDownMenu">
          <Dropdown title="ABOUT UCLA">
            <Dropdown.Menu title="학교">
              <Dropdown.Item>기숙사 정보</Dropdown.Item>
              <Dropdown.Item>다이닝 홀</Dropdown.Item>
              <Dropdown.Item>학교 행사들</Dropdown.Item>
            </Dropdown.Menu>
            <Dropdown.Menu title="유학생 정보">
              <Dropdown.Item>OPT/CPT 정보</Dropdown.Item>
              <Dropdown.Item>Requirements</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/* <div>
          <KclubDropDown />
          <NavLink to="/kclubs" className="linkmenuItem">
            K-Clubs
          </NavLink>
          </div> */}
        <div className="dropDownMenu">
          <Dropdown title="CLASS">
            <Dropdown.Item>수업평가</Dropdown.Item>
            <Dropdown.Item>자율게시판 (QnA)</Dropdown.Item>
          </Dropdown>
        </div>

        <div className="dropDownMenu">
          <Dropdown title="BRUIN MARKET">
            <Dropdown.Item>Rent</Dropdown.Item>
            <Dropdown.Item>Buy / Sell</Dropdown.Item>
            <Dropdown.Item>Trade</Dropdown.Item>
          </Dropdown>
        </div>

        <div className="dropDownMenu">
          <Dropdown title="COMMUNITY">
            <Dropdown.Menu title="Food">
              <Dropdown.Item>Westwood,한타 맛집</Dropdown.Item>
              <Dropdown.Item>가성비 맛집</Dropdown.Item>
              <Dropdown.Item>술집</Dropdown.Item>
            </Dropdown.Menu>
            <Dropdown.Menu title="교통">
              <Dropdown.Item>우버/리프트</Dropdown.Item>
              <Dropdown.Item>한인 택시</Dropdown.Item>
              <Dropdown.Item>버드</Dropdown.Item>
              <Dropdown.Item>Westwood 버스</Dropdown.Item>
              <Dropdown.Item>Bruin 버스</Dropdown.Item>
            </Dropdown.Menu>
            <Dropdown.Menu title="병원">
              <Dropdown.Item>Ashe Center</Dropdown.Item>
            </Dropdown.Menu>
            <Dropdown.Menu title="뷰티">
              <Dropdown.Item>머리</Dropdown.Item>
              <Dropdown.Item>네일</Dropdown.Item>
              <Dropdown.Item>옷</Dropdown.Item>
              <Dropdown.Item>쇼핑</Dropdown.Item>
            </Dropdown.Menu>
            <Dropdown.Menu title="운동">
              <Dropdown.Item>Where?</Dropdown.Item>
              <Dropdown.Item>같이 운동해요</Dropdown.Item>
            </Dropdown.Menu>
            <Dropdown.Menu title="여행">
              <Dropdown.Item>근처 갈만한 곳</Dropdown.Item>
            </Dropdown.Menu>
            <Dropdown.Item>자유게시판</Dropdown.Item>
            <Dropdown.Item>익명게시판(대나무숲)</Dropdown.Item>
          </Dropdown>
        </div>
        <div className="dropDownMenu">
          <Dropdown title="BRUIN JOBS">
            <Dropdown.Item>구인 정보 공지</Dropdown.Item>
            <Dropdown.Item>기업정보</Dropdown.Item>
          </Dropdown>
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
