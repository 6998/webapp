import { chartsActionTypes } from '../lib/actionTypes';
import { getAllCharts, getSingleChart, updateCharts } from '../utils/chartsApi';

const chartsActions = {
  getAll() {
    return dispatch => {
      dispatch(this.startGetCharts());
      return getAllCharts().then(response => {
        dispatch(this.allCharts(response.data));
        dispatch(this.finishGetCharts());
      });
    };
  },

  startGetCharts() {
    return {
      type: chartsActionTypes.START_GET_ALL_CHARTS
    };
  },

  finishGetCharts() {
    return {
      type: chartsActionTypes.FINISH_GET_ALL_CHARTS
    };
  },

  startGetSingleCharts(id) {
    return {
      type: chartsActionTypes.START_GET_SINGLE_CHARTS,
      payload: { id }
    };
  },

  finishGetSingleCharts(id) {
    return {
      type: chartsActionTypes.FINISH_GET_SINGLE_CHARTS,
      payload: { id }
    };
  },

  allCharts(allCharts) {
    return {
      type: chartsActionTypes.ALL_CHARTS,
      payload: allCharts
    };
  },

  processSingleChart(data, id) {
    return {
      type: chartsActionTypes.SINGLE_CHARTS,
      payload: { data, id }
    };
  },

  updateCharts(charts, id) {
    updateCharts(charts, id).then(response => {});
    return {
      type: chartsActionTypes.UPDATE_CHARTS_FOR_USER
    };
  },

  getSingleChart(id) {
    return dispatch => {
      dispatch(this.startGetSingleCharts(id));
      return getSingleChart(id)
        .then(response => {
          dispatch(this.processSingleChart(response.data, id));
        })
        .catch(error => {
          dispatch(this.processSingleChart(null, id));
        })
        .finally(() => {
          dispatch(this.finishGetSingleCharts(id));
        });
    };
  }
};

export default chartsActions;
