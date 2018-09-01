import keymirror from 'keymirror';

export const authActionTypes = keymirror({
  AUTH_SUCCESS: null,
  AUTH_FAIL: null,
  FINISH_APP_LOADING: null,
  LOGIN_FAILED: null,
  RESTART_LOGIN: null
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
  CHARTS_FOR_USER: null
});

export const notificationActionTypes = keymirror({
  OPEN_NOTIFICATION: null,
  CLOSE_NOTIFICATION: null
});

export const mediumActionTypes = keymirror({
	MEDIUM_LIST: null,
});

export const chartsActionTypes = keymirror({
	START_GET_ALL_CHARTS: null,
	FINISH_GET_ALL_CHARTS: null,
	START_GET_SINGLE_CHARTS: null,
	FINISH_GET_SINGLE_CHARTS: null,
	ALL_CHARTS: null,
	SINGLE_CHARTS: null,
	UPDATE_CHARTS_FOR_USER: null
});