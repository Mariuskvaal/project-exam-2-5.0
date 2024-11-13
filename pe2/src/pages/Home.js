import React from 'react';
import './styles/Home.css';
import heroImage from '../images/Wedding+venue.jpg'; // Import your image

const Home = () => {
  return (
    <div className="hero">
      <img src={heroImage} alt="A descriptive alt text for SEO" className="hero-image" />
      <div className="hero-content">
        <h1>Trondheim City </h1>
        <p>Your best memories in life starts here</p>
        <button className="hero-button">Get Started</button>
      </div>
    </div>
  );
};

export default Home;


