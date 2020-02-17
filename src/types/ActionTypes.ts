export const INCREASE = 'INCREASE'
export const DOUBLE = 'DOUBLE'
export const REQUEST_TODO = 'REQUEST_TODO'
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE'
export const RECEIVE_TODOS = 'RECEIVE_TODOS'

export type NumState = number;

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export type TodoState = {
  [key: string]: Todo
}

export type AppNum = number

interface IncreaseAction {
  type: typeof INCREASE
  num: AppNum
}

interface DoubleAction {
  type: typeof DOUBLE
  num: AppNum
}

interface ToggleCompleteAction {
  type: typeof TOGGLE_COMPLETE
  todos: TodoState
}

interface RequestAction {
  type: typeof REQUEST_TODO
  todos: TodoState
}

interface ReceiveTodos {
  type: typeof RECEIVE_TODOS
  todos: TodoState
}

export type NumActionTypes = DoubleAction | IncreaseAction | ToggleCompleteAction | RequestAction | ReceiveTodos