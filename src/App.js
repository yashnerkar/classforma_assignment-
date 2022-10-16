import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/records" element={<Records />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
