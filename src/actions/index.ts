import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import {
  TodoActionTypes,
  TodoState,
  RECEIVE_TODOS,
  REQUEST_TODO,
} from '../types/ActionTypes';

function requestTodo(todos: TodoState): TodoActionTypes {
  return {
    type: REQUEST_TODO,
    todos,
  };
}

function receiveTodos(todos: TodoState, json: TodoState): TodoActionTypes {
  return {
    type: RECEIVE_TODOS,
    todos: { ...json, ...todos },
  };
}

export function fetchPost(todos: TodoState) {
  return (dispatch: ThunkDispatch<TodoState, void, Action>): Promise<TodoActionTypes> => {
    dispatch(requestTodo(todos));

    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(
        (resp) => resp.json(),
        (error) => console.log(error),
      )
      .then((json: TodoState) => dispatch(receiveTodos(todos, json)));
  };
}
