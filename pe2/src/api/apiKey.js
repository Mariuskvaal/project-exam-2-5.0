import { makeApiCall } from '../api/apiUtils';

export const createApiKey = async () => {
  try {
    const response = await makeApiCall('https://v2.api.noroff.dev/auth/create-api-key', 'POST');
    console.log('API Key created:', response.data.key);
    localStorage.setItem('apiKey', response.data.key); // Store the API key in localStorage for future use
    return response.data.key;
  } catch (error) {
    console.error('Error creating API key:', error);
    throw error;
  }
};
