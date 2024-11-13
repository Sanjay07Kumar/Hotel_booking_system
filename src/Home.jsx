import React from 'react';
import './Home.css';
function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar sticky">
          <div className="logo">Hotel Booking</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section id="home" className="hero">
        <h1>Welcome to Our Hotel Booking System</h1>
        <p>Find and book your ideal hotel easily.</p>
        <a href="#booking" className="cta-button">Book Now</a>
      </section>
      <section id="featured" className="featured-hotels">
        <h2>Featured Hotels</h2>
        <div className="hotel-cards">
          <div className="hotel-card1">
            <h3>Hotel Paradise</h3>
            <p>  Located in the heart of the city, offering luxury and comfort.</p>
            <a href="#details" className="details-button">View Details</a>
          </div>
          <div className="hotel-card2">
            <h3>Ocean View Resort</h3>
            <p>  Enjoy breathtaking ocean views and exceptional service.</p>
            <a href="#details" className="details-button">View Details</a>
          </div>
          
        </div>
      </section>
      <section id="booking" className="booking-form">
        <h2>Book Your Stay</h2>
          <button type="submit">Search Hotels</button>
      </section>
      
    </div>
  );
}
export default App;