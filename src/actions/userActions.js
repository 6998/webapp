import {
	newUser,
	companiesList,
	getCompanyById,
	updateCompany,
	deleteCompany,
	getCharts, getChartsAdmin
} from '../utils/userApi';
import history from '../utils/history';

import { userActionTypes } from '../lib/actionTypes';
import { openNotifications } from './notifications';

const userAction = {
  newCompany(user) {
    return dispatch => {
      dispatch(this.startGetUser());
      newUser(user)
        .then(response => {
          dispatch(userAction.getSingleCompany(response));
          dispatch(this.finishGetUser());
        })
        .catch(error => {
          dispatch({
            type: userActionTypes.NEW_USER_FAIL
          });
        })
        .finally(() => {
          dispatch(this.finishGetUser());
        });
    };
  },

  startGetUser() {
    return {
      type: userActionTypes.START_NEW_USER
    };
  },

  finishGetUser() {
    return {
      type: userActionTypes.FINISH_NEW_USER
    };
  },

  companiesList() {
    return dispatch => {
      companiesList().then(response => {
        dispatch(userAction.getCompanyList(response));
      });
    };
  },

  getCompanyById(id) {
    return dispatch => {
			dispatch(this.startGetUser());
      getCompanyById(id)
        .then(response => {
          dispatch(userAction.getSingleCompany(response));
        })
        .finally(() => {
          dispatch(this.finishGetUser());
        });
    };
  },

  updateCompany(company) {
    return dispatch => {
      updateCompany(company).then(response => {
        dispatch(openNotifications('User Update'));
      });
    };
  },

  getCompanyList(response) {
    return {
      type: userActionTypes.COMPANIES_LIST,
      payload: {
        companiesList: response.data
      }
    };
  },

  getSingleCompany(response) {
    return {
      type: userActionTypes.NEW_USER_SUCCESS,
      payload: {
        singleCompany: response.data
      }
    };
  },

  deleteCompany(id) {
    return dispatch => {
      deleteCompany(id).then(response => {
        dispatch(openNotifications('User Removed'));

        dispatch({
          type: userActionTypes.DELETE_USER_SUCCESS
        });
        history.push('/admin/company/list');
      });
    };
  },

  getCharts() {
    return dispatch => {
      dispatch(this.startGetCharts());
      getCharts().then(response => {
        dispatch(this.processCharts(response));
				dispatch(this.finishGetCharts());
			});
    };
  },

	getChartsForAdmin(id) {
		return dispatch => {
			dispatch(this.startGetCharts());
			getChartsAdmin(id).then(response => {
				dispatch(this.processCharts(response));
				dispatch(this.finishGetCharts());
			});
		};
	},


	startGetCharts() {
    return {
      type: userActionTypes.START_CHARTS_FOR_USER
    };
  },

  finishGetCharts() {
    return {
      type: userActionTypes.FINISH_CHARTS_FOR_USER
    };
  },

  processCharts(response) {
    return {
      type: userActionTypes.CHARTS_FOR_USER,
      payload: response.data.charts
    };
  },

  cleanCompany() {
    return {
      type: userActionTypes.CLEAN_NEW_USER
    }
  }
};

export default userAction;
