import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import * as actions from '../actions/index';
import { TodoState } from '../types/ActionTypes';

interface RootState {
  todos: TodoState;
}

const Test = ({ fetchPost, todos }: Connector): JSX.Element => {
  const todoList = Object.keys(todos).map((key) => (
    <li key={todos[key].id}>
      {todos[key].id}
      {' '}
      {todos[key].title}
    </li>
  ));
  const [state, setState] = useState(1);
  return (
    <>
      <div>{state}</div>
      <button type="button" onClick={() => setState(state + 1)}>INCREASE</button>
      <button type="button" onClick={() => fetchPost(todos)}>request</button>
      <ul>{todoList}</ul>
    </>
  );
};

const connector = connect(
  (state: RootState) => ({
    todos: state.todos,
  }),
  (dispatch: ThunkDispatch<{}, {}, any>) => ({
    fetchPost: (todos: TodoState) => dispatch(actions.fetchPost(todos)),
  }),
);

type Connector = ConnectedProps<typeof connector>;

export default connector(Test);
