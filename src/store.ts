import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const rootReducer = combineReducers({});

const middleware = applyMiddleware(
  logger,
  thunk,
);

export default createStore(rootReducer, {}, middleware);
