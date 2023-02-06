import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState.contacts';

const slice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContactsAction: (state, { payload }) => {
      state.data = [...state.data, payload];
    },
    deleteContactsAction: (state, action) => {
      state.data = state.data.filter(({ id }) => id !== action.payload);
    },
  },
});

export const contactsReducer = slice.reducer;
export const { addContactsAction, deleteContactsAction } = slice.actions;
