export const REQUEST_TODO = 'REQUEST_TODO';
export const ERROR_TODO = 'REQUEST_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TodoState = {
  [key: string]: Todo;
};

interface ToggleCompleteAction {
  type: typeof TOGGLE_COMPLETE;
  todos: TodoState;
}

interface RequestAction {
  type: typeof REQUEST_TODO;
  todos: TodoState;
}

interface ReceiveTodos {
  type: typeof RECEIVE_TODOS;
  todos: TodoState;
}

export type TodoActionTypes = ToggleCompleteAction | RequestAction | ReceiveTodos;