import { combineReducers } from "redux";
import auth from "./auth/authReducer";
import isAppLoading from "./appLoadingReducer";
import singleCompany from "./company/companyReducers";
import companiesList from "./company/companiesList";
import notifications from "./notificationsReducers";
import chartsTypes from "./chartsTypes";
import { reducer as modal } from 'redux-modal'

const cometApp = combineReducers({
  auth,
  isAppLoading,
  singleCompany,
  companiesList,
  notifications,
	chartsTypes,
	modal
});

export default cometApp;
