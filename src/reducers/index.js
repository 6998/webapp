import { combineReducers } from 'redux';
import auth from './authReducer'
import example from './exampleReducer'
import isAppLoading from './appLoadingReducer'
const cometApp = combineReducers({
	auth,
  example,
	isAppLoading
});

export default cometApp;