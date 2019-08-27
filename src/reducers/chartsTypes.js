import { chartsType } from "../lib/actionTypes";

const authReducer = (state = { isFetch: false }, action) => {
  const { type, payload } = action;
  if (type === chartsType.GET_CHARTS_TYPES) {
    return { types: payload, isFetch: true };
  } else {
    return state;
  }
};

export default authReducer;
