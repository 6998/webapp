import { authActionTypes } from '../../lib/actionTypes';

const authReducer = (state = { isLoggedIn: false, user: null }, action) => {
  if (action.type === authActionTypes.AUTH_SUCCESS) {
    const user = action.payload.user;
    const newState = state;
    newState.isLoggedIn = true;
    newState.loginFailed = false;
    newState.user = user;

    return { ...newState };
  } else if (action.type === authActionTypes.AUTH_FAIL) {
    const newState = state;
    newState.isLoggedIn = false;
    newState.user = null;

    return { ...newState };
  } else if (action.type === authActionTypes.LOGIN_FAILED) {
    const newState = state;
    newState.loginFailed = true;
    return { ...newState };
  } else if (action.type === authActionTypes.RESTART_LOGIN) {
    const newState = state;
    newState.loginFailed = false;
    return { ...newState };
  } else if (action.type === authActionTypes.NO_SERVER) {
    const newState = state;
    newState.loginFailed = true;
    newState.noServer = true;
    return { ...newState };
  } else {
    return { ...state };
  }
};

export default authReducer;
