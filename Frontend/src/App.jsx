import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import './App.css'
import Home from "./page/Home";
import Teachers from "./page/Teacher";
import Pricing from "./page/Pricing";
import AuthPage from "./page/Login";
import EventsPage from "./page/Event";
import ClassesPage from "./page/Classes";
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
          <Route path="/eventsPage" element={<EventsPage />} />      
          <Route path="/classesPage" element={<ClassesPage />} />    
        </Routes>
      </div>
    </Router>
  );
};

export default App;
