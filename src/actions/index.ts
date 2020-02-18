import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import {
  TodoActionTypes,
  TodoState,
  RECEIVE_TODOS,
  REQUEST_TODO,
  ERROR_TODOS,
  TodoDictionary,
} from '../types/ActionTypes';

function requestTodo(list: TodoDictionary): TodoActionTypes {
  return {
    type: REQUEST_TODO,
    list,
  };
}

function receiveTodos(list: TodoDictionary, json: TodoDictionary): TodoActionTypes {
  return {
    type: RECEIVE_TODOS,
    list: { ...json, ...list },
  };
}

function errorTodos(error: boolean): TodoActionTypes {
  return {
    type: ERROR_TODOS,
    error,
  }
}

export function fetchPost(list: TodoDictionary) {
  return (dispatch: ThunkDispatch<TodoState, void, Action>): Promise<TodoActionTypes> => {
    dispatch(requestTodo(list));

    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(resp => resp.json())
      .then((json: TodoDictionary) => dispatch(receiveTodos(list, json)))
      .catch((error) => dispatch(errorTodos(!!error)));
  };
}
