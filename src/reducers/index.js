import { cognito } from 'react-cognito';
import { combineReducers } from 'redux';
import emptyReducer from './emptyReducer'
import { routerReducer } from 'react-router-redux'

const cometApp = combineReducers({
  emptyReducer,
  cognito,
  routerReducer
});

export default cometApp;