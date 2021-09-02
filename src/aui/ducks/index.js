import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';

import { skinState } from './skin';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    skinState,
  });

export default createRootReducer;
