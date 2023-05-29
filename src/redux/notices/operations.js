import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = process.env.REACT_APP_MAIN_URL;
const errorMsg = "Something's wrong. Please update page and try again";

export const fetchUserNotices = createAsyncThunk(
  'notices/fetchNotices',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/api/notices/user`, {
        params: { page },
      });
      return response.data;
    } catch (error) {
      toast.error(errorMsg);
      return thunkAPI.rejectWithValue('');
    }
  }
);

export const fetchNoticeById = createAsyncThunk(
  'notices/fetchNoticeById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/api/notices/notice/${id}`);
      return response.data;
    } catch (error) {
      toast.error(errorMsg);
      return thunkAPI.rejectWithValue('');
    }
  }
);

export const fetchNoticesByCategory = createAsyncThunk(
  'notices/fetchNoticesByCategory',
  async ({ category, search, page, limit = 10 }, thunkAPI) => {
    try {
      const response = await axios.get(
        `/api/notices/?category=${category}&search=${search}&page=${page}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      toast.error(errorMsg);
      return thunkAPI.rejectWithValue('');
    }
  }
);

export const fetchNoticesFavourite = createAsyncThunk(
  'notices/fetchNoticesFavourite',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/api/notices/favorite`);
      return response.data;
    } catch (error) {
      toast.error(errorMsg);
      return thunkAPI.rejectWithValue('');
    }
  }
);

export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async ([category, data], thunkAPI) => {
    try {
      const response = await axios.post(
        `/api/notices/category?category=${category}`,
        data
      );
      return response.data;
    } catch (error) {
      toast.error(errorMsg);
      return thunkAPI.rejectWithValue('');
    }
  }
);

export const makeNoticeFavourite = createAsyncThunk(
  'notices/makeNoticeFavourite',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.patch(`api/notices/favorite/${id}`);

      return data.data.result;
    } catch (error) {
      toast.error(errorMsg);
      return thunkAPI.rejectWithValue('');
    }
  }
);

export const removeNoticeFavourite = createAsyncThunk(
  'notices/removeNoticeFavourite',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`api/notices/favorite/${id}`);

      return data.result;
    } catch (error) {
      toast.error(errorMsg);
      return thunkAPI.rejectWithValue('');
    }
  }
);

export const deleteNotice = createAsyncThunk(
  'notices/deleteNotice',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`api/notices/${id}`);
      return response.data;
    } catch (error) {
      toast.error(errorMsg);
      return thunkAPI.rejectWithValue('');
    }
  }
);
