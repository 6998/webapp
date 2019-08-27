import { BASE_API_URL } from '../lib/appConstants';
import axios from 'axios';

export const getChartsTypes = () => {
  return axios.get(`${BASE_API_URL}chart-types`);
};
