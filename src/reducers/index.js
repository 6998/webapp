import { combineReducers } from 'redux';
import auth from './auth/authReducer'
import isAppLoading from './appLoadingReducer'
import singleCompany from './company/companyReducers'
import postsList from './post/postsList'
import companiesList from './company/companiesList'
import notifications from './notificationsReducers'
import charts from './charts'
const cometApp = combineReducers({
	auth,
	isAppLoading,
	singleCompany,
	companiesList,
	notifications,
	postsList,
	charts
});

export default cometApp;