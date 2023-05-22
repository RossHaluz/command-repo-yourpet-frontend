import { createSlice } from '@reduxjs/toolkit';
import { fetchNotices } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  category: '',
};

export const noticesSlice = createSlice({
  name: 'notices',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchNotices.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchNotices.fulfilled, (state, action) => {
        // console.log(action.payload.data.notices);
        return {
          ...state,
          items: [...action.payload.data.notices],
          isLoading: false,
        };
      })
      .addCase(fetchNotices.rejected, state => {
        state.isLoading = false;
      });
  },
  reducers: {
    chooseCategory: (state, action) => {
      state.category = action.payload.category;
    },
  },
});

export const { chooseCategory } = noticesSlice.actions;
