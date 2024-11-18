import React, { useState, useEffect } from 'react';
import { fetchVenues } from '../api/venues'; // Import the API function
import './styles/VenuePage.css'; // Add a CSS file for styling if needed

const VenuePage = () => {
  const [venues, setVenues] = useState([]); // State to store venue data

  useEffect(() => {
    const getVenues = async () => {
      try {
        const data = await fetchVenues();
        setVenues(data);
      } catch (error) {
        console.error('Error fetching venues:', error);
      }
    };

    getVenues();
  }, []);

  return (
    <div className="venue-page">
      <h1>All Venues</h1>
      <div className="venues-container">
        {venues.map((venue) => (
          <div key={venue.id} className="venue-card">
            <img src={venue.media[0]?.url} alt={venue.media[0]?.alt || venue.name} className="venue-image" />
            <h2>{venue.name}</h2>
            <p>{venue.description}</p>
            <p><strong>City:</strong> {venue.location.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VenuePage;

