import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Router, HashRouter} from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from "./pages/AboutUs";
import Kojobs from "./pages/Kojobs";
import Kubs from "./pages/Kubs";
import Ksea from "./pages/Ksea";
import LoginSignup from "./pages/LoginSignup";
import Profile from './pages/Profile';
import BuySell from './pages/buySell';
import ItemDetails from './pages/ItemDetails'

function App({userRepository}) {
  console.log("@app.jsx, userRepository: " , userRepository);
  return (
    <HashRouter >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="kclubs/kojobs" element={<Kojobs />} />
      <Route path="kclubs/kubs" element={<Kubs />} />
      <Route path="kclubs/ksea" element={<Ksea />} />
      <Route path="/loginsignup" element={<LoginSignup userRepository={userRepository}/>} />
      <Route path="myprofile" element={<Profile />} />
      <Route path="/bruinmarket/buysell" element={<BuySell />} />
      <Route path="/itemDetails" element={<ItemDetails/>}/>
    </Routes>
  </HashRouter>
  );

  
}

export default App;
