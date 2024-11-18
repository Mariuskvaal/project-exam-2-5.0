// src/api/fetchVenues.js
export const fetchVenues = async () => {
    const API_URL = 'https://v2.api.noroff.dev/holidaze/venues';
    try {
      const response = await fetch(API_URL);
      const result = await response.json();
      return result.data; // Return venue data
    } catch (error) {
      console.error('Error fetching venues:', error);
      throw error;
    }
  };
  
  