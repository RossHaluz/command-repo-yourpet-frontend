import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchNotices,
  fetchNoticesByCategory,
  deleteNotice,
  fetchNoticesFavourite,
  addNotice,
  makeNoticeFavourite,
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
      .addCase(addNotice.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
      })
      .addCase(deleteNotice.fulfilled, (state, action) => {
        return {
          items: [
            ...state.items.filter(notice => notice.id !== action.payload.id),
          ],
          isLoading: false,
        };
      })
      .addCase(fetchNoticesFavourite.fulfilled, (state, action) => {
        console.log('fetchNoticesFavourite');
        return {
          ...state,
          isLoading: false,
        };
      })
      .addCase(makeNoticeFavourite.fulfilled, (state, action) => {
        console.log('makeNoticeFavourite');
        return {
          ...state,
          isLoading: false,
        };
      })
      .addMatcher(
        isAnyOf(
          fetchNotices.pending,
          fetchNoticesByCategory.pending,
          deleteNotice.pending,
          fetchNoticesFavourite.pending,
          addNotice.pending,
          makeNoticeFavourite
        ),
        state => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchNotices.rejected,
          fetchNoticesByCategory.rejected,
          deleteNotice.rejected,
          fetchNoticesFavourite.rejected,
          addNotice.rejected,
          makeNoticeFavourite.rejected
        ),
        state => {
          state.isLoading = false;
        }
      );
  },
  reducers: {},
});
