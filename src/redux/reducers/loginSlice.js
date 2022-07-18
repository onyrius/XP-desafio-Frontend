/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nome: '',
  email: '',
  senha: '',
  ativos: [],
  saldo: '',
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
    setName: (state, action) => {
      state.nome = action.payload;
    },
    setAtivosCliente: (state, action) => {
      state.ativos = action.payload;
    },
    setSaldo: (state, action) => {
      state.saldo = action.payload;
    },
  },

});

export const {
  setEmail, setSenha, setName, setAtivosCliente, setSaldo,
} = login.actions;
export default login.reducer;
