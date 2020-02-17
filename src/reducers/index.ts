import { 
  INCREASE, DOUBLE, NumState, NumActionTypes, TodoState, RECEIVE_TODOS, REQUEST_TODO,
} from '../types/ActionTypes';

const initialState: NumState = 1;

export function numbers(
  state = initialState,
  action: NumActionTypes,
): NumState {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    
    case DOUBLE:
      return state * 2;

    default:
      return state;
  }
}

const initialTodo: TodoState = {};

export function todos(
  state = initialTodo,
  action: NumActionTypes,
) {
  switch (action.type) {
    case REQUEST_TODO:
    case RECEIVE_TODOS:
      return Object.assign({}, state, action.todos);
    default:
      return state;
  }
}