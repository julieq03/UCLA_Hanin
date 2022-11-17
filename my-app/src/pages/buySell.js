import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TableComponent from "../components/Table";
import BannerImage from "../images/buysell.jpg";

function BuySell() {
  return (
    <React.Fragment>
      <Navbar />
      <article
        className="banner"
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        <h1>Buy & Sell</h1>
      </article>
      <TableComponent />
      <Footer />
    </React.Fragment>
  );
}

export default BuySell;
