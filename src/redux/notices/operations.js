import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://pets-back-end.onrender.com';
// axios.defaults.baseURL = process.env.REACT_APP_MAIN_URL;
// const errorMsg = "Something's wrong. Please update page and try again";

export const fetchNotices = createAsyncThunk(
  'notices/fetchNotices',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/api/notices`, { params: { page } });
      return response.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue('');
    }
  }
);

export const fetchNoticeById = createAsyncThunk(
  'notices/fetchNoticeById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/${id}`);
      return response.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue('');
    }
  }
);

export const fetchNoticesByCategory = createAsyncThunk(
  'notices/fetchNoticesByCategory',
  async (type, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/category/${type}`);
      return response.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue('');
    }
  }
);

export const fetchNoticesFavourite = createAsyncThunk(
  'notices/fetchNoticesFavourite',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/favourite`);
      return response.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue('');
    }
  }
);

export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async (newNotice, thunkAPI) => {
    try {
      const response = await axios.post(`/notices/category`, newNotice);
      return response.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue('');
    }
  }
);

export const makeNoticeFavourite = createAsyncThunk(
  'notices/makeNoticeFavourite',
  async (id, thunkAPI) => {
    try {
      const response = await axios.patch(`/notices/favourite/${id}`);
      return response.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue('');
    }
  }
);

export const deleteNotice = createAsyncThunk(
  'notices/deleteNotice',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/notices/${id}`);
      return response.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue('');
    }
  }
);
