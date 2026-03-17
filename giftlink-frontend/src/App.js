import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
// لو عندك LandingPage و Navbar استوردهم هنا برضه

function App() {
  return (
    <Router>
        <Routes>
          {/* الصفحة اللي هتفتح أول ما تدخل localhost:3000 */}
          <Route path="/" element={<RegisterPage />} /> 
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
    </Router>
  );
}

export default App;