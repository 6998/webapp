import { fxActionTypes } from '../lib/actionTypes';
import { getFxList, updateFxList } from '../utils/fxApi';

const fxActions = {
  getCurrenciesList() {
    return dispatch => {
      dispatch(this.startGetFxPairs());
      return getFxList().then(response => {
        dispatch(this.fxPairs(response.data));
        dispatch(this.finishGetFxPairs());
      });
    };
  },
  startGetFxPairs() {
    return {
      type: fxActionTypes.START_GET_FX_PAIRS_LIST
    };
  },

  finishGetFxPairs() {
    return {
      type: fxActionTypes.FINISH_GET_FX_PAIRS_LIST
    };
  },

  fxPairs(pairs) {
    return {
      type: fxActionTypes.FX_PAIRS_LIST,
      payload: { pairs }
    };
  },

  updatePairs(pairs) {
    return dispatch => {
      dispatch(this.startGetFxPairs());
      return updateFxList(pairs)
        .then(() => {
          dispatch(this.getCurrenciesList());
          dispatch(this.finishUpdatePairs());
        })
    };
  },

	finishUpdatePairs() {
		return {
			type: fxActionTypes.FINISH_UPDATE_FX_PAIRS_LIST,
		};
  }
};

export default fxActions;
