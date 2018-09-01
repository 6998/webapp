import { chartsActionTypes } from '../../lib/actionTypes';

const chartsReducer = (state = {isLoadingAllCharts: true, allCharts: []}, action) => {
  if (action.type === chartsActionTypes.START_GET_ALL_CHARTS) {
    return { ...state, isLoadingAllCharts: true };
  }

  if (action.type === chartsActionTypes.FINISH_GET_ALL_CHARTS) {
    return { ...state, isLoadingAllCharts: false };
  }

  if (action.type === chartsActionTypes.ALL_CHARTS) {
    const allCharts = action.payload;
    return { ...state, allCharts };
  }

  return { ...state };
};

export default chartsReducer;
