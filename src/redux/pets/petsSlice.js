import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchPets } from './operations';

const extraActions = [fetchPets];

const getActions = type => extraActions.map(action => action[type]);

const contactsSlice = createSlice({
  name: 'pets',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchPets.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      //   .addCase(addContact.fulfilled, (state, { payload }) => {
      //     state.items.unshift(payload);
      //   })
      //   .addCase(deleteContact.fulfilled, (state, { payload }) => {
      //     state.items = state.items.filter(contact => contact.id !== payload.id);
      //   })
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
