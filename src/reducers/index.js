import { cognito } from 'react-cognito';
import { combineReducers } from 'redux';
import message from './user'
import example from './exampleReducer'

const cometApp = combineReducers({
  message,
  cognito,
  example
});

export default cometApp;