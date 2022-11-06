import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from "./pages/AboutUs";
import Kojobs from "./pages/Kojobs";
import Kubs from "./pages/Kubs";
import Ksea from "./pages/Ksea";
import LoginSignup from "./pages/LoginSignup";

function App({userRepository}) {
  console.log("@app.jsx, userRepository: " , userRepository);
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="kclubs/kojobs" element={<Kojobs />} />
      <Route path="kclubs/kubs" element={<Kubs />} />
      <Route path="kclubs/ksea" element={<Ksea />} />
      <Route path="/loginsignup" element={<LoginSignup userRepository={userRepository}/>} />
    </Routes>
  </BrowserRouter>
  );

  
}

export default App;
