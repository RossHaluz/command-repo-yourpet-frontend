import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, getCurrentUser } from './operetions';

const initialState = {
  user: { email: null, password: null },
  token: null,
  isLoading: false,
  isUserLogin: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state, __) {
      state.isLoading = true;
    },

    [register.fulfilled](state, action) {
      console.log(action);
      state.user = action.payload;
      state.token = action.payload.user.token;
      state.isLoading = false;
      state.isUserLogin = true;
      state.isRefreshing = true;
    },
    [login.pending](state, __) {
      state.isLoading = true;
    },
    [login.fulfilled](state, action) {
      console.log(action);
      state.user = action.payload.user;
      state.token = action.payload.user.token;
      state.isLoading = false;
      state.isUserLogin = true;
      state.isRefreshing = true;
    },
    [logout.fulfilled](state, __) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isUserLogin = false;
    },
    [getCurrentUser.pending](state) {
      state.isRefreshing = true;
    },
    [getCurrentUser.fulfilled](state, action) {
      console.log(action);
      state.user = action.payload.userInfo;
      state.isUserLogin = true;
      state.isRefreshing = false;
    },
    [getCurrentUser.rejected](state) {
      state.isRefreshing = false;
      state.isUserLogin = false;
    },
  },
});

export const authReducer = authSlice.reducer;
