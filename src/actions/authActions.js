import { authActionTypes } from '../lib/actionTypes';
import { authApi, changePasswordApi, loginApi } from '../utils/authApi';
import { openNotifications } from './notifications';

const authActions = {
  auth() {
    return dispatch => {
      return authApi()
        .then(response => {
          dispatch(this.processAuthRequest(response));
          dispatch(this.finishLoadingApp());
        })
        .catch(error => {
          dispatch(this.noServer());
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
          dispatch(this.processAuthRequest(response));
        })
        .catch(error => {
          dispatch({
            type: authActionTypes.LOGIN_FAILED
          });
        });
    };
  },

  processAuthRequest(response) {
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

  noServer() {
    return {
      type: authActionTypes.NO_SERVER
    };
  },

  finishLoadingApp() {
    return {
      type: authActionTypes.FINISH_APP_LOADING
    };
  },

  changePassword(password, id) {
    return dispatch => {
      return changePasswordApi(password, id)
        .then(response => {
          dispatch(openNotifications('Password change successfully'));
        })
        .catch(error => {
          dispatch(openNotifications('Password change FAILED'));
        })
        .finally(() => {
          dispatch({
            type: authActionTypes.CHANGE_PASSWORD
          });
        });
    };
  }
};

export default authActions;
