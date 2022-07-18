import { configureStore } from '@reduxjs/toolkit';
import assetsSlice from './reducers/assetsSlice';
import loginSlice from './reducers/loginSlice';
import userSlice from './reducers/userSlice';
import buySlice from './reducers/buySlice';

const store = configureStore({

  reducer: {
    usuarioLogado: loginSlice,
    usersData: userSlice,
    assets: assetsSlice,
    buy: buySlice,
  },

});

export default store;
