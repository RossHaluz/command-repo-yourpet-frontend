import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://pets-back-end.onrender.com';

export const getOurNews = createAsyncThunk(
  'api/news',
  async (news, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/news/our-news');
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
