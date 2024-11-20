import { makeApiCall } from './apiUtils';

const VENUES_API_URL = 'https://v2.api.noroff.dev/holidaze/venues';

export const fetchVenues = async () => {
  try {
    const result = await makeApiCall(VENUES_API_URL);
    return result.data; // Return venue data
  } catch (error) {
    console.error('Error fetching venues:', error);
    throw error;
  }
};

export const fetchVenueById = async (id) => {
  const url = `${VENUES_API_URL}/${id}`;
  try {
    const data = await makeApiCall(url);
    return data;
  } catch (error) {
    console.error('Error fetching venue by ID:', error);
    throw error;
  }
};

  
  