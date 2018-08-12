import keymirror from 'keymirror';


export const authActionTypes = keymirror({
	AUTH_SUCCESS: null,
	AUTH_FAIL: null,
	FINISH_APP_LOADING: null,
	LOGIN_FAILED: null,
	RESTART_LOGIN: null,
});
