interface Dictionary<T> {
  [Key: string]: T;
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TodoDictionary = Dictionary<Todo>;

export type TodoState = {
  list: TodoDictionary;
  error: boolean;
};

export const REQUEST_TODO = 'REQUEST_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const ERROR_TODOS = 'ERROR_TODOS';

interface ToggleCompleteAction {
  type: typeof TOGGLE_COMPLETE;
  list: TodoDictionary;
}

interface RequestAction {
  type: typeof REQUEST_TODO;
  list: TodoDictionary;
}

interface ReceiveTodos {
  type: typeof RECEIVE_TODOS;
  list: TodoDictionary;
}

interface ErrorTodos {
  type: typeof ERROR_TODOS;
  error: boolean;
}

export type TodoActionTypes = ToggleCompleteAction | RequestAction | ReceiveTodos | ErrorTodos;