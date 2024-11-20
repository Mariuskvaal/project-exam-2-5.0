import { makeApiCall } from '../api/apiUtils';

const API_URL = 'https://v2.api.noroff.dev/auth/register';

export const registerUser = async (userData) => {
  try {
    const response = await makeApiCall(API_URL, 'POST', userData);
    return response; // Return the newly registered user profile
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};
