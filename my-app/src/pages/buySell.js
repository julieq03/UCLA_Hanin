import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TableComponent from "../components/Table";
import BannerImage from "../images/buysell.jpg";
import Form from "react-bootstrap/Form";

function BuySell() {
  const [selectedCategory, setSelectedCategory] = useState("Show All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // function getFilteredList() {
  //   if (!selectedCategory) {
  //     return "Show All";
  //   }
  //   return itemCategory.filter((item) => item.category === selectedCategory);
  // }

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
          <Form.Select
            aria-label="Default select example"
            onChange={handleCategoryChange}
          >
            <option value="Show All">Show All</option>
            <option value="Food">Food</option>
            <option value="Clothes">Clothes</option>
            <option value="Electronics">Electronics</option>
            <option value="Others">Others</option>
          </Form.Select>
        </div>
      </div>
      <TableComponent categoryFilter={selectedCategory} />
      <Footer />
    </React.Fragment>
  );
}

export default BuySell;
