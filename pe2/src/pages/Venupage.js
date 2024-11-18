import React, { useState, useEffect } from 'react';
import { fetchVenues } from '../api/venues'; // Import the API function
import { useNavigate } from 'react-router-dom'; // For navigation
import './styles/VenuePage.css';

const VenuePage = () => {
  const [venues, setVenues] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

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

  const handleViewVenue = (id) => {
    navigate(`/venue/${id}`); // Navigate to the specific venue page
  };

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
            <button onClick={() => handleViewVenue(venue.id)} className="view-venue-button">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VenuePage;


