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

  export const fetchVenueById = async (id) => {
    const API_URL = `https://v2.api.noroff.dev/holidaze/venues/${id}`;
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch venue');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching venue by ID:', error);
      throw error;
    }
  };
  
  
  