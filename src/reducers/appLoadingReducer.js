import { authActionTypes } from '../lib/actionTypes';

const authReducer = (state = true, action) => {
  if (action.type === authActionTypes.FINISH_APP_LOADING) {

    return false;
	} else {
  	return state;
	}
};

export default authReducer;
