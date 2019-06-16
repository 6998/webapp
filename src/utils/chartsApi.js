import { BASE_API_URL } from '../lib/appConstants';
import axios from 'axios';

export const getAllCharts = () => {
  return axios.get(`${BASE_API_URL}plotly/files/all`, {withCredentials: true});
};

export const updateCharts = (charts, id) => {
	return axios.post(`${BASE_API_URL}company/charts/update`, {charts, id});
};

export const getSingleChart = (id) => {
	return axios.get(`${BASE_API_URL}plotly/plot/${id}`);
};

