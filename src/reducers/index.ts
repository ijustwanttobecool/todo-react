import {
  TodoActionTypes, TodoState, RECEIVE_TODOS, REQUEST_TODO,
} from '../types/ActionTypes';

const initialTodo: TodoState = {};

export function todos(
  state = initialTodo,
  action: TodoActionTypes,
): TodoState {
  switch (action.type) {
    case REQUEST_TODO:
    case RECEIVE_TODOS:
      return { ...state, ...action.todos };
    default:
      return state;
  }
}
