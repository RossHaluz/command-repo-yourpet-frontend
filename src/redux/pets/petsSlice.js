import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchPets, addPet, deletePet } from './operations';

const extraActions = [fetchPets, addPet, deletePet];

const getActions = type => extraActions.map(action => action[type]);

const contactsSlice = createSlice({
  name: 'pets',
  initialState: {
    petsInfo: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchPets.fulfilled, (state, { payload }) => {
        state.petsInfo = payload.petsInfo;
      })

      .addCase(addPet.fulfilled, (state, { payload }) => {
        state.petsInfo.push(payload);
        state.isLoading = false;
      })
      .addCase(deletePet.fulfilled, (state, { payload }) => {
        state.petsInfo = state.petsInfo.filter(
          pet => pet._id !== payload.data._id
        );
      })

      .addMatcher(isAnyOf(...getActions('pending')), state => {
        state.isLoading = true;
      })

      .addMatcher(isAnyOf(...getActions('rejected')), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addMatcher(isAnyOf(...getActions('fulfilled')), state => {
        state.isLoading = false;
        state.error = null;
      }),
});

export const contactsReducer = contactsSlice.reducer;
