import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://pets-back-end.onrender.com "

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const removeAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ""
}

export const register = createAsyncThunk('auth/register', async (creadential, {rejectWithValue}) => {
    try {
        const {data} = await axios.post('/api/users/register', creadential)
        setAuthHeader(data.token)
       return data
    } catch (error) {
        rejectWithValue(error.message)
    }
})

export const login = createAsyncThunk('auth/login', async (creadential, {rejectWithValue}) => {
    try {
        const {data} = await axios.post('/api/users/login', creadential);
        setAuthHeader(data.token)
        return data;
    } catch (error) {
        rejectWithValue(error.message)
    }
})

export const logout = createAsyncThunk('auth/logout', async (__, {rejectWithValue}) => {
    try {
        await axios.post('/api/users/logout') 
        removeAuthHeader()
    } catch (error) {
        rejectWithValue(error.message)
    }
})



export const getCurrentUser = createAsyncThunk('auth/current', async (__, {getState, rejectWithValue}) => {
    const state = getState();
    console.log(state);
    const token = state.auth.token;
        if(!token){
            return rejectWithValue()
        }
        setAuthHeader(token)
    
    try {
    const {data} = await axios.get('/api/users/current')
    return data
    } catch (error) {
        rejectWithValue(error.message)
    }
})