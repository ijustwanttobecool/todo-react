export interface TodoType {
  id: number;
  title: string;
  completed: boolean;
};

export type TodoArray = TodoType[];

export type TodoState = {
  list: TodoArray;
  error: boolean;
};

export const REQUEST_TODO = 'REQUEST_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const ADD_TODO = 'ADD_TODO';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const ERROR_TODOS = 'ERROR_TODOS';

interface ToggleCompleteAction {
  type: typeof UPDATE_TODO;
  todo: TodoType;
}

interface RequestAction {
  type: typeof REQUEST_TODO;
  list: TodoArray;
}

interface ReceiveTodos {
  type: typeof RECEIVE_TODOS;
  list: TodoArray;
}

interface ErrorTodos {
  type: typeof ERROR_TODOS;
  error: boolean;
}

interface UpdateTodo {
  type: typeof UPDATE_TODO;
  todo: TodoType;
}

interface AddTodo {
  type: typeof ADD_TODO;
  todo: TodoType
}

export type TodoActionTypes = ToggleCompleteAction | RequestAction | ReceiveTodos | ErrorTodos | UpdateTodo | AddTodo;