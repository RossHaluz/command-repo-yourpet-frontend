import axios from 'axios';

const Ajax = axios.create({
  baseURL: 'http://localhost:3001/', // Set your API base URL
});

// Function to set the Bearer token in the request headers
const setBearerToken = (token) => {
  Ajax.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

// Function to clear the Bearer token from the request headers
const clearBearerToken = () => {
  delete Ajax.defaults.headers.common['Authorization'];
};

const createApiRequest = (method) => async (...args) => {
  try {
    const response = await Ajax[method](...args);

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const apiRequest = {
  get: createApiRequest('get'),
  post: createApiRequest('post'),
  put: createApiRequest('put'),
  delete: createApiRequest('delete'),
  patch: createApiRequest('patch')
  // Add more HTTP verbs as needed
};

export { setBearerToken, clearBearerToken, apiRequest };

