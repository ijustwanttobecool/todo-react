import {
  TodoActionTypes, TodoState, RECEIVE_TODOS, REQUEST_TODO, ERROR_TODOS, UPDATE_TODO, ADD_TODO,
} from '../types/ActionTypes';

const initialTodo: TodoState = {
  list: [],
  error: false
};

export function todos(
  state = initialTodo,
  action: TodoActionTypes,
): TodoState {
  switch (action.type) {
    case REQUEST_TODO:
      return { ...state, error: false };
    case RECEIVE_TODOS:
      return { 
        list: action.list,
        error: false,
      };
    case ERROR_TODOS:
      return {
        list: state.list,
        error: action.error,
      };
    case UPDATE_TODO:
      const newState = state.list.map((todo) => todo.id === action.todo.id ? action.todo : todo);
      return {
        list: newState,
        error: false,
      };
    case ADD_TODO:
      return {
        list: [ ...state.list, action.todo],
        error: state.error,
      };
    default:
      return state;
  }
}
