import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchPets, addPet, deletePet, updateUserInfo } from './operations';

const extraActions = [fetchPets, addPet, deletePet, updateUserInfo];

const getActions = type => extraActions.map(action => action[type]);

const contactsSlice = createSlice({
  name: 'pets',
  initialState: {
    userInfo: [],
    petsInfo: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchPets.fulfilled, (state, { payload }) => {
        state.userInfo = payload.userInfo;
        state.petsInfo = payload.petsInfo;
      })

      .addCase(addPet.fulfilled, (state, action) => {
        state.petsInfo.push(action.payload);
        state.isLoading = false;
      })
      .addCase(updateUserInfo.fulfilled, (state, { payload }) => {
        const updatedFields = payload;
        state.userInfo = {
          ...state.userInfo,
          ...updatedFields,
        };
      })
      .addCase(deletePet.fulfilled, (state, { payload }) => {
        state.petsInfo = state.petsInfo.filter(
          pet => pet._id !== payload.data._id
        );
      })

      .addMatcher(isAnyOf(...getActions('pending')), state => {
        state.isLoading = true;
      })

      .addMatcher(isAnyOf(...getActions('rejected')), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addMatcher(isAnyOf(...getActions('fulfilled')), state => {
        state.isLoading = false;
        state.error = null;
      }),
});

export const contactsReducer = contactsSlice.reducer;
