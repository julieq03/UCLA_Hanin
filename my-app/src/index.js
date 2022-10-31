import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import Kojobs from "./pages/Kojobs";
import Kubs from "./pages/Kubs";
import Ksea from "./pages/Ksea";

const root = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="login" element={<Login />} />
      <Route path="kclubs/kojobs" element={<Kojobs />} />
      <Route path="kclubs/kubs" element={<Kubs />} />
      <Route path="kclubs/ksea" element={<Ksea />} />
    </Routes>
  </BrowserRouter>,
  root
);
