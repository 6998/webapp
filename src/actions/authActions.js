import { authActionTypes } from '../lib/actionTypes';
import { authApi, loginApi } from '../utils/authApi';

const authActions = {
  auth() {
		return dispatch => {
			return authApi().then(response => {
				dispatch({
					type: authActionTypes.FINISH_APP_LOADING
				});

				this.processRequest(response, dispatch);
			});
		}
  },

	login(email, password) {
		return dispatch => {
			dispatch({
				type: authActionTypes.RESTART_LOGIN
			})
			return loginApi({email, password}).then(response => {
				this.processRequest(response, dispatch);
			}).catch(error => {
				dispatch({
					type: authActionTypes.LOGIN_FAILED
				})
			});
		}
	},

	processRequest(response, dispatch) {
		const user = response.data.user;
		if (user) {
			dispatch({
				type: authActionTypes.AUTH_SUCCESS,
				payload: { user },
			});
			return false;
		}
		dispatch({
			type: authActionTypes.AUTH_FAIL,
		});
		return true;
	}
};

export default authActions;
