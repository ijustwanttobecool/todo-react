import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import * as actions from '../actions/index';
import { TodoType, TodoArray } from '../types/ActionTypes';
import { RootState } from '../store';
import Todo from './Todo';
import AddTodo from './AddTodo';

const TodoList = ({ getTodos, patchAsyncTodo, todos, addAsyncTodo }: Connector): JSX.Element => {
  useEffect(() => {
    getTodos(todos);
  }, []);

  const toggleCompleted = (id: number) => {
    const toggleTodo = todos.find((todo) => todo.id === id) as TodoType;
    patchAsyncTodo({
      ...toggleTodo,
      completed: !toggleTodo.completed
    }, todos)
  }

  const addTodo = (title: string) => {
    if (!title) return;
    addAsyncTodo(title)
  };

  const list = todos.map((todo) =>
    <Todo
      key={todo.id}
      id={todo.id}
      title={todo.title}
      completed={todo.completed}
      onToggle={toggleCompleted}
    />
  )
  return (
    <>
      <AddTodo onAdd={addTodo}/>
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
    getTodos: (list: TodoArray) => dispatch(actions.getAsyncTodos(list)),
    patchAsyncTodo: (todo: TodoType, list: TodoArray) => dispatch(actions.patchAsyncTodo(list, todo)),
    addAsyncTodo: (title: string) => dispatch(actions.addAsyncTodo(title))
  }),
);

type Connector = ConnectedProps<typeof connector>;

export default connector(TodoList);
