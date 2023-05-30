import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://pets-back-end.onrender.com';
// axios.defaults.baseURL = process.env.REACT_APP_MAIN_URL;
const errorMsg = "Something's wrong. Please update page and try again";

export const fetchPets = createAsyncThunk(
  'pets/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/users/current');
      return response.data;
    } catch (error) {
      toast.error(errorMsg);
      return thunkAPI.rejectWithValue('');
    }
  }
);

export const deletePet = createAsyncThunk(
  'pets/deletePet',
  async (petId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/pets/${petId}`);
      return response.data;
    } catch (error) {
      toast.error(errorMsg);
      return thunkAPI.rejectWithValue('');
    }
  }
);

export const addPet = createAsyncThunk(
  'notices/addPet',
  async (newPet, thunkAPI) => {
    try {
      const response = await axios.post(`/api/pets`, newPet);
      return response.data;
    } catch (error) {
      if (error.response.status === 409) {
        toast.error('You already have a pet with this name');
        return thunkAPI.rejectWithValue('');
      }
      toast.error(errorMsg);
      return thunkAPI.rejectWithValue('');
    }
  }
);
