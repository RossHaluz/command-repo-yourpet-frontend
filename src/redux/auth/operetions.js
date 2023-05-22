import { createAsyncThunk } from "@reduxjs/toolkit";
import { setBearerToken, clearBearerToken, apiRequest } from '../../api/Ajax'

export const register = createAsyncThunk('auth/register', async (creadential, { rejectWithValue }) => {
    try {
        const { data } = await apiRequest.post('/api/users/register', creadential)
        setBearerToken(data.token)
        return data
    } catch (error) {
        rejectWithValue(error.message)
    }
})

export const login = createAsyncThunk('auth/login', async (creadential, { rejectWithValue }) => {
    try {
        const { user } = await apiRequest.post('/api/users/login', creadential);

        setBearerToken(user.token)
        return user;
    } catch (error) {
        rejectWithValue(error.message)
    }
})

export const logout = createAsyncThunk('auth/logout', async (__, { rejectWithValue }) => {
    try {
        await apiRequest.post('/api/users/logout')
        clearBearerToken()
    } catch (error) {
        rejectWithValue(error.message)
    }
})



export const getCurrentUser = createAsyncThunk('auth/current', async (__, { getState, rejectWithValue }) => {
    const state = getState();
    console.log(state);
    const token = state.auth.token;
    if (!token) {
        return rejectWithValue()
    }
    setBearerToken(token)

    try {
        const { data } = await apiRequest.get('/api/users/current')
        return data
    } catch (error) {
        rejectWithValue(error.message)
    }
})
