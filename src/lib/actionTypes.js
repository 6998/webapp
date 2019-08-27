import keymirror from "keymirror";

export const authActionTypes = keymirror({
  AUTH_SUCCESS: null,
  AUTH_FAIL: null,
  FINISH_APP_LOADING: null,
  LOGIN_FAILED: null,
  RESTART_LOGIN: null,
  NO_SERVER: null,
  CHANGE_PASSWORD: null
});

export const userActionTypes = keymirror({
  NEW_USER_SUCCESS: null,
  START_NEW_USER: null,
  FINISH_NEW_USER: null,
  NEW_USER_FAIL: null,
  COMPANIES_LIST: null,
  DELETE_USER_SUCCESS: null,
  DELETE_FAIL: null,
  START_CHARTS_FOR_USER: null,
  FINISH_CHARTS_FOR_USER: null,
  CHARTS_FOR_USER: null,
  CLEAN_NEW_USER: null
});

export const notificationActionTypes = keymirror({
  OPEN_NOTIFICATION: null,
  CLOSE_NOTIFICATION: null
});

export const chartsType = keymirror({
  REQUEST_CHARTS_TYPES: null,
  GET_CHARTS_TYPES: null
});
