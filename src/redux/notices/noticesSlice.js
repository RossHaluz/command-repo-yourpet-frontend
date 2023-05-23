import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchNotices,
  fetchNoticesByCategory,
  deleteNotice,
} from './operations';

const initialState = {
  items: [],
  isLoading: false,
};

export const noticesSlice = createSlice({
  name: 'notices',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchNotices.fulfilled, (state, action) => {
        return {
          ...state,
          items: [...action.payload.data.notices],
          isLoading: false,
        };
      })
      .addCase(fetchNoticesByCategory.fulfilled, (state, action) => {
        return {
          ...state,
          items: [...action.payload.data.notices],
          isLoading: false,
        };
      })
      .addCase(deleteNotice.fulfilled, (state, action) => {
        return {
          items: [
            ...state.items.filter(notice => notice.id !== action.payload.id),
          ],
          isLoading: false,
        };
      })
      .addMatcher(
        isAnyOf(
          fetchNotices.pending,
          fetchNoticesByCategory.pending,
          deleteNotice.pending
        ),
        state => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchNotices.rejected,
          fetchNoticesByCategory.rejected,
          deleteNotice.rejected
        ),
        state => {
          state.isLoading = false;
        }
      );
  },
  reducers: {},
});

export const { chooseCategory } = noticesSlice.actions;
