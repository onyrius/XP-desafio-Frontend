/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comprar: false,
  vender: false,
};

const isDisable = createSlice({
  name: 'Desabilitar',
  initialState,
  reducers: {
    setDesabilitarCompra: (state, action) => {
      state.comprar = action.payload;
    },
    setDesabilitarVenda: (state, action) => {
      state.vender = action.payload;
    },
  },
});

export const { setDesabilitarCompra, setDesabilitarVenda } = isDisable.actions;
export default isDisable.reducer;
