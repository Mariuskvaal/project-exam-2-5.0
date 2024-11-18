import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchVenueById } from '../api/venues';
import './styles/VenuPage-specific.css';

const VenuPageSpecific = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getVenue = async () => {
      try {
        const data = await fetchVenueById(id);
        setVenue(data.data); // Adjust for API response structure
      } catch (error) {
        console.error('Error fetching venue:', error);
        setError('Failed to load venue details');
      }
    };

    getVenue();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!venue) {
    return <p>Loading venue details...</p>;
  }

  return (
    <div className="venue-specific-container">
      <h1 className="venue-specific-title">{venue.name}</h1>
      {/* Safely handle undefined or empty media */}
      {venue.media && venue.media.length > 0 ? (
        <img
          src={venue.media[0].url}
          alt={venue.media[0].alt || venue.name}
          className="venue-specific-image"
        />
      ) : (
        <p>No image available</p>
      )}
      <div className="venue-specific-details">
        <p>{venue.description}</p>
        <p><strong>City:</strong> {venue.location?.city || 'Unknown'}</p>
        <p><strong>Address:</strong> {venue.location?.address || 'Unknown'}</p>
        <p><strong>Country:</strong> {venue.location?.country || 'Unknown'}</p>
      </div>
      <a href="/venue" className="back-button">Back to Venues</a>
    </div>
  );
};

export default VenuPageSpecific;




