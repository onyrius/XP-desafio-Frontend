import { configureStore } from '@reduxjs/toolkit';
import assetsSlice from './reducers/assetsSlice';
import loginSlice from './reducers/loginSlice';
import userSlice from './reducers/userSlice';
import buySlice from './reducers/buySlice';
import isDisableSlice from './reducers/isDisableSlice';

const store = configureStore({

  reducer: {
    usuarioLogado: loginSlice,
    usersData: userSlice,
    assets: assetsSlice,
    buy: buySlice,
    isDisable: isDisableSlice,
  },

});

export default store;
