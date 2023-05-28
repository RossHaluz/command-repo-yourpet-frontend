import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchUserNotices,
  fetchNoticesByCategory,
  deleteNotice,
  fetchNoticesFavourite,
  addNotice,
  makeNoticeFavourite,
  removeNoticeFavourite,
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
      .addCase(fetchUserNotices.fulfilled, (state, action) => {
        return {
          ...state,
          items: [...action.payload.data.notices],
          totalPages: action.payload.data.totalPages,
          isLoading: false,
        };
      })
      .addCase(fetchNoticesByCategory.fulfilled, (state, action) => {
        return {
          ...state,
          items: [...action.payload.data.notices],
          totalPages: action.payload.data.totalPages,
          isLoading: false,
        };
      })
      .addCase(addNotice.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
      })
      .addCase(deleteNotice.fulfilled, (state, action) => {
        console.log(action.payload);
        return {
          items: [
            ...state.items.filter(
              notice => notice._id !== action.payload.data._id
            ),
          ],
          isLoading: false,
        };
      })
      .addCase(fetchNoticesFavourite.fulfilled, (state, action) => {
        return {
          ...state,
          items: [...action.payload.data.notices],
          isLoading: false,
        };
      })
      .addCase(makeNoticeFavourite.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          notice => notice._id === action.payload._id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(removeNoticeFavourite.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          notice => notice._id === action.payload._id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addMatcher(
        isAnyOf(
          fetchUserNotices.pending,
          fetchNoticesByCategory.pending,
          deleteNotice.pending,
          fetchNoticesFavourite.pending,
          addNotice.pending,
          makeNoticeFavourite.pending,
          removeNoticeFavourite.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchUserNotices.rejected,
          fetchNoticesByCategory.rejected,
          deleteNotice.rejected,
          fetchNoticesFavourite.rejected,
          addNotice.rejected,
          makeNoticeFavourite.rejected,
          removeNoticeFavourite.rejected
        ),
        state => {
          state.isLoading = false;
        }
      );
  },
  reducers: {},
});
