import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/index';
import TodoList from '../components/TodoList';

export function App(): JSX.Element {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}
