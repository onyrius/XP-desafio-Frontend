import { configureStore } from '@reduxjs/toolkit'
import { ConnectedRouter } from 'connected-react-router'
import React, { ComponentType, ReactElement } from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store';


export const makeStore = () => {
  return configureStore({ 
    reducer, 
   })
}

const renderWithRoutesAndRedux = (Component, props = {}) => {
  return (
    <Provider store={store || makeStore()}>
      <ConnectedRouter history={history}>
        <Component {...props} />
      </ConnectedRouter>
    </Provider>
  )
}

export default renderWithRoutesAndRedux;