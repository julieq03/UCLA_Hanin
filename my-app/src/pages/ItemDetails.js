import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

function TaskDetails(props) {
  const location = useLocation();
  // console.log("location : ", location);

  // console.log("location.state : ", location.state);

  const [customerName, setCustomerName] = useState(
    location.state.item_customername
  );
  const [category, setCategory] = useState(location.state.item_category);
  const [price, setPrice] = useState(location.state.item_price);
  const [description, setDescription] = useState(
    location.state.item_description
  );
  const [date, setDate] = useState(location.state.item_date);
  const [status, setStatus] = useState(location.state.item_status);

  // console.log("category", category);
  // console.log("customerName", customerName);
  // console.log("description", description);
  // console.log("price", price);
  // console.log("date", date);

  return (
    <React.Fragment>
      <Navbar />
      <h1>Item category</h1>
      <h3>{category}</h3>
      <h1>Item Customer</h1>
      <h3>{customerName}</h3>
      <h1>Item description</h1>
      <h3>{description}</h3>
      <h1>Item price</h1>
      <h3>{price}</h3>
      <h1>Date Posted</h1>
      <h3>{date}</h3>
      <h1>Item Status</h1>
      <h3>{status}</h3>

      <Footer />
    </React.Fragment>
  );
}

export default TaskDetails;
