import { combineReducers,  createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { numbers, todos } from '../reducers/index';

const reducer = combineReducers({ numbers, todos });
export const store = createStore(
  reducer,
  applyMiddleware(thunk),
);