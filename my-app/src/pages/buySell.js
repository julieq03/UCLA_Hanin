import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TableComponent from "../components/Table";
import BannerImage from "../images/buysell.jpg";
import Form from "react-bootstrap/Form";

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
      <div className="controlArea">
        <div className="searchBox">
          <Form.Label htmlFor="inputPassword5">Search</Form.Label>
          <Form.Control type="text" aria-describedby="passwordHelpBlock" />
          <Form.Text>
            Your can search for certain customer name or description of an item.
          </Form.Text>
        </div>
        <div className="filterBox">
          <label>Category</label>
          <Form.Select aria-label="Default select example">
            <option value="all">Show All</option>
            <option value="food">Food</option>
            <option value="clothes">Clothes</option>
            <option value="electronics">Electronics</option>
            <option value="others">Others</option>
          </Form.Select>
        </div>
      </div>
      <TableComponent />
      <Footer />
    </React.Fragment>
  );
}

export default BuySell;
