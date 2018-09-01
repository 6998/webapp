import { authActionTypes } from '../lib/actionTypes';
import { authApi, loginApi } from '../utils/authApi';

const authActions = {
  auth() {
    return dispatch => {
      return authApi().then(response => {
        dispatch(this.processRequest(response));
				dispatch(this.finishLoadingApp());
			});
    };
  },

  login({ password, username }) {
    return dispatch => {
      dispatch({
        type: authActionTypes.RESTART_LOGIN
      });
      return loginApi({ password, username })
        .then(response => {
          dispatch(this.processRequest(response));
        })
        .catch(error => {
          dispatch({
            type: authActionTypes.LOGIN_FAILED
          });
        });
    };
  },

  processRequest(response) {
    const user = response.data.user;
    if (user) {
      return {
        type: authActionTypes.AUTH_SUCCESS,
        payload: { user }
      };
    } else {
      return {
        type: authActionTypes.AUTH_FAIL
      };
    }
  },

  finishLoadingApp() {
    return {
      type: authActionTypes.FINISH_APP_LOADING
    };
  }
};

export default authActions;
