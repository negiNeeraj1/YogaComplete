import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import './App.css'
import Home from "./page/Home";
import Teachers from "./page/Teacher";
import Pricing from "./page/Pricing";
import AuthPage from "./page/Login";


const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/authPage" element={<AuthPage />} />          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
