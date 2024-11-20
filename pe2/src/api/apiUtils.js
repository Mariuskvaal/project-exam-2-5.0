export const makeApiCall = async (url, method = 'GET', body = null) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Add Authorization header
  const token = localStorage.getItem('accessToken');
  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`;
  }

  // Add API key header
  const apiKey = localStorage.getItem('apiKey'); // Retrieve the API key from localStorage
  if (apiKey) {
    options.headers['X-Noroff-API-Key'] = apiKey;
  }

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};



  
  