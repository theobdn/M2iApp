import React from 'react';
import './App.css';
import { Navbar } from './Primary/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import { Home } from './Primary/Pages/Home';
import { Journal } from './Primary/Pages/Journal';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/poids" element={<Home />} />
        <Route path="/statistiques" element={<Home />} />
        <Route path="/mesrecettes" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
