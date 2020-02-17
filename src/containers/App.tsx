import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/index';
import Test from '../components/Test'



export function App() {
  return (
    <Provider store={store}>
      <Test/>
    </Provider>
  )
}