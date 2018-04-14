import { cognito } from 'react-cognito';
import { combineReducers } from 'redux';
import message from './user'
const cometApp = combineReducers({
  message,
  cognito
});

export default cometApp;