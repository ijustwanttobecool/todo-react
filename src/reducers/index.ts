import {
  TodoActionTypes, TodoState, RECEIVE_TODOS, REQUEST_TODO, ERROR_TODOS,
} from '../types/ActionTypes';

const initialTodo: TodoState = {
  list: {},
  error: false
};

export function todos(
  state = initialTodo,
  action: TodoActionTypes,
): TodoState {
  console.log(action)
  switch (action.type) {
    case REQUEST_TODO:
    case RECEIVE_TODOS:
      return { 
        list: {...state.list, ...action.list },
        error: false,
      };
    case ERROR_TODOS:
      return {
        list: {...state.list },
        error: action.error,
      }
    default:
      return state;
  }
}
