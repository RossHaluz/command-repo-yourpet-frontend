import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  getCurrentUser,
  hideModalSuccessRegister,
} from './operations';

const initialState = {
  user: { email: null, password: null },
  token: null,
  isLoading: false,
  isUserLogin: false,
  isRefreshing: false,
  modalSuccessRegister: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isUserLogin = true;
        state.isRefreshing = true;
        state.modalSuccessRegister = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.user.token;
        state.isLoading = false;
        state.isUserLogin = true;
        state.isRefreshing = true;
      })
      .addCase(logout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isUserLogin = false;
        state.isRefreshing = false;
      })
      .addCase(getCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload.userInfo;
        state.isUserLogin = true;
        state.isRefreshing = false;
      })
      .addCase(getCurrentUser.rejected, state => {
        state.isRefreshing = false;
        state.isUserLogin = false;
      })
      .addCase(hideModalSuccessRegister.fulfilled, (state, action) => {
        state.modalSuccessRegister = action.payload;
      })
      .addMatcher(isAnyOf(register.rejected, login.rejected), state => {
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(register.pending, login.pending), state => {
        state.isLoading = true;
      });
  },
});

export const authReducer = authSlice.reducer;
