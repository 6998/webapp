import { combineReducers } from 'redux';
import allCharts from './allChartsReducers'
import chartsForUser from './ChartsForUserReducers'
import chartsData from './chartData'

const cometApp = combineReducers({
	allCharts,
	chartsForUser,
	chartsData
});

export default cometApp;