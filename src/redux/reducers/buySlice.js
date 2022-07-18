/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ativo: {},
};

const compraAtivo = createSlice({
  name: 'compraAtivo',
  initialState,
  reducers: {
    setBuyData: (state, action) => {
      state.ativo = action.payload;
    },
  },

});

export const { setBuyData } = compraAtivo.actions;
export default compraAtivo.reducer;
