import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, getCurrentUser } from "./operetions";

const initialState = {
    user: {email: null, password: null},
    token: null,
    isLoading: false,
    isUserLogin: false,
    isRefreshing: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [register.pending](state, __) {
            state.isLoading = true
        },

        [register.fulfilled](state, action){
            state.user = action.payload;
            state.token = action.payload.token;
            state.isLoading = false;
            state.isUserLogin = true;
            state.isRefreshing = true;
        },
        [login.pending](state, __){
            state.isLoading = true
        },
        [login.fulfilled](state, action){
            state.user = action.payload;
            state.token = action.payload.token;
            state.isLoading = false;
            state.isUserLogin = true;
            state.isRefreshing = true;
        },
        [logout.fulfilled](state, __) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isUserLogin = false;
        },
        [getCurrentUser.pending](state, __){
            state.isLoading = true;
        },
        [getCurrentUser.fulfilled](state, action){
            state.user = action.payload;
            state.isUserLogin = true;
            state.isLoading = false;
            state.isRefreshing = false;
        },
        [getCurrentUser.rejected](state, __){
            state.isRefreshing = false;
            state.isUserLogin = false;
        }
    }
})

export const authReducer = authSlice.reducer;