import axios from 'axios';

const MAIN_URL = 'https://pets-back-end.onrender.com';
// const MAIN_URL = process.env.REACT_APP_MAIN_URL;

const fetchNotices = async () => {
  const response = await axios.get(`${MAIN_URL}/api/notices`);
  return response.data;
};

export { fetchNotices };
