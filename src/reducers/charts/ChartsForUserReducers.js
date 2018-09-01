import { userActionTypes } from '../../lib/actionTypes';

const chartsReducer = (state = {isLoadingChartsForUser: true, chrtsForUser: []}, action) => {
  if (action.type === userActionTypes.START_CHARTS_FOR_USER) {
    return { ...state, isLoadingChartsForUser: true };
  }

  if (action.type === userActionTypes.FINISH_CHARTS_FOR_USER) {
    return { ...state, isLoadingChartsForUser: false };
  }

  if (action.type === userActionTypes.CHARTS_FOR_USER) {
    const chartsForUser = action.payload;
    return { ...state, chartsForUser };
  }

  return { ...state };
};

export default chartsReducer;


