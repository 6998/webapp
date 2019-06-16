import { chartsActionTypes } from '../../lib/actionTypes';

const chartsReducer = (state = {}, action) => {
  if (action.type === chartsActionTypes.START_GET_SINGLE_CHARTS) {
    const { id } = action.payload;
    const newState = { ...state };
    if (!newState[id]) newState[id] = {};
    newState[id].isLoading = true;
		return {...newState};
  }

  if (action.type === chartsActionTypes.FINISH_GET_SINGLE_CHARTS) {
    const { id } = action.payload;
    const newState = { ...state };
    newState[id].isLoading = false;
		return {...newState};
  }

  if (action.type === chartsActionTypes.SINGLE_CHARTS) {
    const { id, data } = action.payload;
    const newState = { ...state };
    newState[id].chartData = data ? data : {error: true};
    return {...newState};
  }

  return { ...state };
};

export default chartsReducer;
