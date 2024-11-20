import { makeApiCall } from '../api/apiUtils';

const API_URL = 'https://v2.api.noroff.dev/auth/login';

export const loginUser = async (credentials) => {
  try {
    const response = await makeApiCall(API_URL, 'POST', credentials);
    return response; // Return the user data and token
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};

