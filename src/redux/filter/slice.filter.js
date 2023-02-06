import { createSlice } from '@reduxjs/toolkit';
import { filterInitialState } from './initialState.filter';

const slice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    changeFilterAction: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { changeFilterAction } = slice.actions;
