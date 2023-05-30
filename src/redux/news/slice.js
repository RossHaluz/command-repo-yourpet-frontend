import { createSlice } from '@reduxjs/toolkit';
import { getOurNews } from './operetions';

const initialState = {
  newsList: [],
  isLoading: false,
  search: '',
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    searchNews(state, action) {
      state.search = action.payload;
    },
  },
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

export const { searchNews } = newsSlice.actions;

export const newsReducer = newsSlice.reducer;
