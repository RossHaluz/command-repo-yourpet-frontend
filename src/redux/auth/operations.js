import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://pets-back-end.onrender.com';
// axios.defaults.baseURL = process.env.REACT_APP_MAIN_URL;
const errorMsg = "Something's wrong. Please update page and try again";

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (creadential, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/users/register', creadential);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      toast.error(errorMsg);
      return rejectWithValue('');
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (creadential, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/users/login', creadential);
      setAuthHeader(data.user.token);
      return data;
    } catch (error) {
      toast.error(errorMsg);
      return rejectWithValue('');
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (__, { rejectWithValue }) => {
    try {
      await axios.post('/api/users/logout');
      removeAuthHeader();
    } catch (error) {
      toast.error(errorMsg);
      return rejectWithValue('');
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/current',
  async (__, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.token;
    if (!token) {
      return rejectWithValue();
    }
    setAuthHeader(token);

    try {
      const { data } = await axios.get('/api/users/current');
      return data;
    } catch (error) {
      toast.error(errorMsg);
      return rejectWithValue('');
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  'pets/updateUserInfo',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.put(`/api/users/update`, userData);
      return response.data;
    } catch (error) {
      toast.error(errorMsg);
      return thunkAPI.rejectWithValue('');
    }
  }
);

export const hideModalSuccessRegister = createAsyncThunk(
  'auth/hideModalSuccessRegister',
  async (_, __) => {
    return false;
  }
);
