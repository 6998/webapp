import { chartsType } from "../lib/actionTypes";
import { getChartsTypes } from "../utils/chartTypesApi";

export const fetchChartsTypes = () => dispatch => {
  getChartsTypes().then(response => {
    const { data } = response;
    dispatch({
      type: chartsType.GET_CHARTS_TYPES,
      payload: data
    });
  });
};
