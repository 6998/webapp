import { cognito } from 'react-cognito';
import { combineReducers } from 'redux';
import emptyReducer from './emptyReducer'
const cometApp = combineReducers({
  emptyReducer,
  cognito
});

export default cometApp;