import { BASE_API_URL } from '../lib/appConstants';
import axios from 'axios';

export const getCurrenciesList = () => {
  return axios.get(`${BASE_API_URL}fx/currencies`);
};

export const getFxList = () => {
  return axios.get(`${BASE_API_URL}fx/pairs/list`);
};

export const updateFxList = pairs => {
  return axios.post(`${BASE_API_URL}fx/pairs/update`, { pairs });
};
