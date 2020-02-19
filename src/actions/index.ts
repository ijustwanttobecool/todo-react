import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import {
  TodoArray,
  TodoType,
  TodoState,
  TodoActionTypes,
  RECEIVE_TODOS,
  REQUEST_TODO,
  ERROR_TODOS,
  UPDATE_TODO,
  ADD_TODO,
} from '../types/ActionTypes';

const baseUrl = 'http://localhost:3000/todos';

function requestTodo(list: TodoArray): TodoActionTypes {
  return {
    type: REQUEST_TODO,
    list,
  };
}

function receiveTodos(list: TodoArray): TodoActionTypes {
  return {
    type: RECEIVE_TODOS,
    list,
  };
}

function errorTodos(error: boolean): TodoActionTypes {
  return {
    type: ERROR_TODOS,
    error,
  }
}

function updateTodo(todo: TodoType): TodoActionTypes {
  return {
    type: UPDATE_TODO,
    todo,
  }
}

function addTodo(todo: TodoType): TodoActionTypes {
  return {
    type: ADD_TODO,
    todo,
  }
}

export function addAsyncTodo(title: string) {
  return function (dispatch: ThunkDispatch<TodoState, void, Action>) {
    dispatch(requestTodo([]));

    return fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify({
        title,
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((resp) => resp.json())
      .then((resp: TodoType) => dispatch(addTodo(resp)))
      .catch((error) => dispatch(errorTodos(!!error)));
  }
}

export function patchAsyncTodo(list: TodoArray, todo: TodoType) {
  return function (dispatch: ThunkDispatch<TodoState, void, Action>) {
    dispatch(requestTodo(list));

    return fetch(`${baseUrl}/${todo.id}`, {
      method: 'PATCH',
      body: JSON.stringify(todo),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    })
      .then((resp) => resp.json())
      .then((json: TodoType) => dispatch(updateTodo(json)))
      .catch((error) => dispatch(errorTodos(!!error)));
  };
}

export function getAsyncTodos(list: TodoArray) {
  return (dispatch: ThunkDispatch<TodoState, void, Action>): Promise<TodoActionTypes> => {
    dispatch(requestTodo(list));
    return fetch(baseUrl)
      .then(resp => resp.json())
      .then((json: TodoArray) => dispatch(receiveTodos(json)))
      .catch((error) => dispatch(errorTodos(!!error)));
  };
}
