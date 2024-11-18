import React, { useState, useEffect } from 'react';
import './styles/Home.css';
import Footer from '../components/footer/footer';
import heroImage from '../images/Wedding+venue.jpg';
import { fetchVenues } from '../api/venues';

const Home = () => {
  const [venues, setVenues] = useState([]); // State to store venue data

  useEffect(() => {
    const getVenues = async () => {
      try {
        const data = await fetchVenues();
        // Sort venues by the `created` field (newest first) and take the top 3
        const sortedVenues = data
          .sort((a, b) => new Date(b.created) - new Date(a.created))
          .slice(0, 3);
        setVenues(sortedVenues);
      } catch (error) {
        console.error(error);
      }
    };

    getVenues();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="hero">
        <img src={heroImage} alt="A descriptive alt text for SEO" className="hero-image" />
        <div className="hero-content">
          <h1>Trondheim City</h1>
          <p>Your best memories in life start here</p>
          <button className="hero-button">Get Started</button>
        </div>
      </div>

      {/* MAIN SECTION */}
      <h1 className="h1-main-section">Top 3 newest Venues</h1>
      <div className="venues-container">
        {venues.map((venue) => (
          <div key={venue.id} className="venue-card">
            <h2>{venue.name}</h2>
            <p>{venue.description}</p>
            <p><strong>City:</strong> {venue.location.city}</p>
          </div>
        ))}
      </div>

      {/* MAIN SECTION 2 */}
      <h1 className="h1-main-section">How to get your ticket</h1>
      <div className="main-section2">
        <div className="box1">
          <h2>App</h2>
          <p>Explore a variety of venues suited for all kinds of events.</p>
        </div>
        <div className="box2">
          <h2>PDF On Mobile</h2>
          <p>Explore a variety of venues suited for all kinds of events.</p>
        </div>
        <div className="box3">
          <h2>Print Out</h2>
          <p>Explore a variety of venues suited for all kinds of events.</p>
        </div>
      </div>

      <div className="ticketButton">
        <button className="new-section-button">Få tilgang til din billett</button>
      </div>

      <Footer />
    </>
  );
};

export default Home;
