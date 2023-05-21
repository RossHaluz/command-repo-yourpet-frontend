import axios from 'axios';

const MAIN_URL = 'https://pets-back-end.onrender.com';
// const API_KEY = process.env.REACT_APP_API_KEY;

const fetchNotices = async () => {
  const response = await axios.get(`${MAIN_URL}/api/notices`);
  return response.data;
};

export { fetchNotices };
