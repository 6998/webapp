import { postList } from '../utils/postApi';
import { mediumActionTypes } from '../lib/actionTypes';

const mediumActions = {
  list() {
    return dispatch => {
      return postList().then(response => {
        dispatch(this.processList(response));
      });
    };
  },

  processList(response) {
    return {
      type: mediumActionTypes.MEDIUM_LIST,
      payload: response.data
    };
  }
};

export default mediumActions;
