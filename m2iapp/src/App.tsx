import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Home } from './Primary/Pages/Home/Home';
import { Journal } from './Primary/Pages/Journal/Journal';
import LoginPage from './Primary/Pages/Login/LoginPage';
import PoidsPage from './Primary/Pages/Poids/PoidsPage';
import StatistiquePage from './Primary/Pages/Statistiques/StatistiquePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/poids" element={<PoidsPage />} />
        <Route path="/statistiques" element={<StatistiquePage />} />
        <Route path="/mesrecettes" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
