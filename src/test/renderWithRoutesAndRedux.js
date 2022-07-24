import { configureStore } from '@reduxjs/toolkit'
import React, { ComponentType, ReactElement } from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store';

// export const makeStore = () => {
//   return configureStore({ 
//     reducer, 
//    })
// }

// const renderWithRoutesAndRedux = (Component, props = {}) => {
//   return (
//     <Provider store={store || makeStore()}>
//       <ConnectedRouter history={history}>
//         <Component {...props} />
//       </ConnectedRouter>
//     </Provider>
//   )
// }

// export default renderWithRoutesAndRedux;

const myReducers = {
  reducer:
    {
      // login, assets, orders, account, buy, sell, negotiation,
    },
};
const createMockStore = (initialState) => (
  configureStore(myReducers, initialState));
  export const renderWithRedux = (
  component,
  { initialState, store = createMockStore(initialState) } = {},
) => (
  {
    ...render(
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={defaultTheme}>
            {component}
            <GlobalStyles />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>,
    ),
    store,
  }
);