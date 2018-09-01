import { notificationActionTypes } from '../lib/actionTypes';

const notificationsReducer = (state = {isOpen: false}, action) => {
  if (action.type === notificationActionTypes.OPEN_NOTIFICATION) {
    const {text} = action.payload;
    return {...state, isOpen: true, text}
  }

  if (action.type === notificationActionTypes.CLOSE_NOTIFICATION) {
		const {text} = action.payload;
		return {...state, isOpen: false, text}
  }

  return state;
};

export default notificationsReducer;
