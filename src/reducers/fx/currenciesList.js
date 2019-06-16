import { fxActionTypes } from '../../lib/actionTypes';

const fxListReducer = (
  state = { isLoadingCurrencies: true, currencies: [] },
  action
) => {
  if (action.type === fxActionTypes.CURRENCIES_LIST) {
    const { currencies } = action.payload;
    return { ...state, currencies };
  }

  if (action.type === fxActionTypes.START_GET_CURRENCIES_LIST) {
    return { ...state, isLoadingCurrencies: true };
  }

  if (action.type === fxActionTypes.FINISH_GET_CURRENCIES_LIST) {
    return { ...state, isLoadingCurrencies: false };
  }
  return state;
};

export default fxListReducer;
