/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  usuarios: [],
};

const usuarios = createSlice({
  name: 'usuarios',
  initialState,
  reducers: {
    setUsersData: (state, action) => {
      state.usuarios = [...action.payload];
    },
  },
});

export const { setUsersData } = usuarios.actions;
export default usuarios.reducer;
