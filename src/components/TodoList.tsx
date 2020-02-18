import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import * as actions from '../actions/index';
import { TodoDictionary } from '../types/ActionTypes';
import { RootState } from '../store';
import Todo from './Todo';

const TodoList = ({ fetchPost, todos, error }: Connector): JSX.Element => {
  useEffect(() => {
    fetchPost(todos);
  }, []);
 
  const list = Object.values(todos).map((todo) => 
    <Todo
      key={todo.id}
      title={todo.title}
      completed={todo.completed}
      user={todo.userId}
    />
  )
  return (
    <>
      {list}
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

export default connector(TodoList);
