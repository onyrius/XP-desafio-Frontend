/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  senha: '',
};

const login = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setSenha: (state, action) => {
      state.senha = action.payload;
    },
  },

});

export const { setEmail, setSenha } = login.actions;
export default login.reducer;
