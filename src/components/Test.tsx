import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import * as actions from '../actions/index';
import { TodoDictionary } from '../types/ActionTypes';
import { RootState } from '../store';

const Test = ({ fetchPost, todos, error }: Connector): JSX.Element => {
  const todoList = Object.keys(todos).map((key) => (
    <li key={todos[key].id}>
      {todos[key].id}
      {' '}
      {todos[key].title}
    </li>
  ));

  return (
    <>
      <div>{error.toString()}</div>
      <button type="button" onClick={() => fetchPost(todos)}>request</button>
      <ul>{todoList}</ul>
    </>
  );
};

const connector = connect(
  (state: RootState) => ({
    todos: state.todos.list,
    error: state.todos.error,
  }),
  (dispatch: ThunkDispatch<{}, {}, any>) => ({
    fetchPost: (todos: TodoDictionary) => dispatch(actions.fetchPost(todos)),
  }),
);

type Connector = ConnectedProps<typeof connector>;

export default connector(Test);
