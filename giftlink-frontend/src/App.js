import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import MainPage from './components/MainPage/MainPage';
import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './components/Navbar';
import SearchPage from './components/SearchPage/SearchPage.js';
import DetailsPage from './components/DetailsPage/DetailsPage.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
<Route path="/" element={<LandingPage />} />
    <Route path="/app" element={<MainPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/gift/:id" element={<DetailsPage />} /> 
    <Route path="/search" element={<SearchPage />} />   
      </Routes>
    </Router>
  );
}

export default App;