import { 
  AppNum,
  DOUBLE,
  INCREASE,
  NumActionTypes,
  TodoState,
  RECEIVE_TODOS,
  REQUEST_TODO,
} from "../types/ActionTypes";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

function requestTodo(todos: TodoState): NumActionTypes {
  return {
    type: REQUEST_TODO,
    todos
  }
}

function receiveTodos(todos: TodoState, json: TodoState): NumActionTypes {
  return {
    type: RECEIVE_TODOS,
    todos: {...json, ...todos},
  }
}

export function increase(num: AppNum): NumActionTypes {
  return {
    type: INCREASE,
    num,
  };
}

export function double(num: AppNum): NumActionTypes {
  return {
    type: DOUBLE,
    num,
  };
}

export function fetchPost(todos: TodoState) {
  return function(dispatch: ThunkDispatch<TodoState, void, Action>) {
    dispatch(requestTodo(todos))

    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(
        resp => resp.json(),
        error => console.log(error)
      )
      .then((json: TodoState) => dispatch(receiveTodos(todos, json)))
  }
}