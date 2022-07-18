/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ativos: [],
};

const acoesBolsa = createSlice({
  name: 'acoesBolsa',
  initialState,
  reducers: {
    setAssetsData: (state, action) => {
      state.ativos = [...action.payload];
    },
  },

});

export const { setAssetsData } = acoesBolsa.actions;
export default acoesBolsa.reducer;
