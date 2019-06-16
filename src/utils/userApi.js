import { BASE_API_URL } from '../lib/appConstants';
import axios from 'axios';

export const newUser = (user) => {
  return axios.post(`${BASE_API_URL}company/new`, {user});
};

export const companiesList = () => {
	return axios.get(`${BASE_API_URL}company/all`);
};

export const getCompanyById = (id) => {
	return axios.get(`${BASE_API_URL}company/getById/${id}`);
};

export const updateCompany = (company) => {
	return axios.post(`${BASE_API_URL}company/update`, company);
};

export const deleteCompany = (id) => {
	return axios.get(`${BASE_API_URL}company/remove/${id}`);
};

export const getCharts = () => {
	return axios.get(`${BASE_API_URL}company/charts/list`);
};

export const getChartsAdmin = (id) => {
	return axios.get(`${BASE_API_URL}company/charts/list/admin/${id}`);
};