import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers/index';

const reducer = combineReducers(reducers);
export const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export type RootState = ReturnType<typeof reducer>;