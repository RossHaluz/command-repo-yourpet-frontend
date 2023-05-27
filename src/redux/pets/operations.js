import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://pets-back-end.onrender.com';

export const fetchPets = createAsyncThunk(
  'pets/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/users/current');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deletePet = createAsyncThunk(
  'pets/deletePet',
  async (petId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/pets/${petId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
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
      console.log(error.message);
      return thunkAPI.rejectWithValue('');
    }
  }
);

// export const updateUserInfo = createAsyncThunk(
//   'pets/updateUserInfo',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.put(`/api/users/update`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
