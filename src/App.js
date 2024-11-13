import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Sign from './Sign';
import './index.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar sticky">
          <div className="logo">Hotel Booking</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sign />} />
      </Routes>
      <footer>
        <p>&copy; 2024 Hotel Booking System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
