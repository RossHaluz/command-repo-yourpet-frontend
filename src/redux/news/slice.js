import { createSlice } from '@reduxjs/toolkit';
import { getOurNews } from './operetions';

const initialState = {
  newsList: [],
  isLoading: false,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: {
    [getOurNews.pending](state, __) {
      state.isLoading = true;
    },
    [getOurNews.fulfilled](state, action) {
      state.isLoading = false;
      state.newsList = action.payload;
    },
  },
});

export const newsReducer = newsSlice.reducer;
