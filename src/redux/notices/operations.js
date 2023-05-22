import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://pets-back-end.onrender.com';
// axios.defaults.baseURL = process.env.REACT_APP_MAIN_URL;
const errorMsg = "Something's wrong. Please update page and try again";

export const fetchNotices = createAsyncThunk(
  'notices/fetchNotices',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/api/notices`);
      return response.data;
    } catch (error) {
      console.log(errorMsg);
      return thunkAPI.rejectWithValue('');
    }
  }
);
