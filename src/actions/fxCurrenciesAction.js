import { fxActionTypes } from '../lib/actionTypes';
import { getCurrenciesList } from '../utils/fxApi';

const fxActions = {
  getCurrenciesList() {
    return dispatch => {
      dispatch(this.startGetCurrenciesList());
      return getCurrenciesList().then(response => {
        dispatch(this.currenciesList(response.data));
        dispatch(this.finishGetCurrenciesList());
      });
    };
  },
  startGetCurrenciesList() {
    return {
      type: fxActionTypes.START_GET_CURRENCIES_LIST
    };
  },

  finishGetCurrenciesList() {
    return {
      type: fxActionTypes.FINISH_GET_CURRENCIES_LIST
    };
  },

	currenciesList(currencies) {
    return {
      type: fxActionTypes.CURRENCIES_LIST,
      payload: { currencies }
    };
  }
};

export default fxActions;
