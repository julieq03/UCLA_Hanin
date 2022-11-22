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
            <span>ABOUT UCLA</span>
            <Link to="/">기숙사</Link>
            <Link to="/">다이닝</Link>
            <Link to="/">행사</Link>
            <Link to="/">OPT/CPT INFO</Link>
            <Link to="/">REQUIREMENT</Link>
          </div>
          <div class="footer-link-items">
            <span>CLASS</span>
            <Link to="/kclubs/kojobs">수업평가(수업정보)</Link>
            <Link to="/kclubs/kubs">자율게시판(QnA)</Link>
          </div>
          <div class="footer-link-items">
            <span>BRUIN MARKET</span>
            <Link to="/">RENT</Link>
            <Link to="/bruinmarket/buysell">사고팔고</Link>
            <Link to="/">나눔 / 교환</Link>
          </div>
          <div class="footer-link-items">
            <span>COMMUNITY</span>
            <Link to="/">음식</Link>
            <Link to="/">교통</Link>
            <Link to="/">병원</Link>
            <Link to="/">뷰티</Link>
            <Link to="/">운동</Link>
            <Link to="/">여행</Link>
            <Link to="/">자유</Link>
            <Link to="/">익명게시판</Link>
          </div>
          <div class="footer-link-items">
            <span>BRUIN JOBS</span>
            <Link to="/">구인정보 공지</Link>
            <Link to="/">기업소개</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
