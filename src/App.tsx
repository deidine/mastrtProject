import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import "tailwindcss/tailwind.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
 

    <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>


  );
}

export default App;
