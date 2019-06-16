import { fxActionTypes } from '../../lib/actionTypes';

const fxListReducer = (
  state = { isLoadingFxPairs: true, fxPairs: [] },
  action
) => {
  if (action.type === fxActionTypes.FX_PAIRS_LIST) {
    const { pairs } = action.payload;
    const fxPairs = pairs.pairs;
    return { ...state, fxPairs };
  }

  if (action.type === fxActionTypes.START_GET_FX_PAIRS_LIST) {
    return { ...state, isLoadingFxPairs: true };
  }

  if (action.type === fxActionTypes.FINISH_GET_FX_PAIRS_LIST) {
    return { ...state, isLoadingFxPairs: false };
  }
  return state;
};

export default fxListReducer;
