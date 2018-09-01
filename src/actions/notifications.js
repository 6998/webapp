import { notificationActionTypes } from '../lib/actionTypes';

export const openNotifications = (text) => {
		return dispatch => {
				dispatch({
          type: notificationActionTypes.OPEN_NOTIFICATION,
					payload: {text}
        });
		};
};

export const closeNotifications = (text) => {
	return dispatch => {
		dispatch({
			type: notificationActionTypes.CLOSE_NOTIFICATION,
			payload: {text: null}
		});
	};
};