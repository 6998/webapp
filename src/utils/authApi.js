import { BASE_API_URL } from '../lib/appConstants';
import axios from 'axios';

export const authApi = () => {
  return axios.get(`${BASE_API_URL}auth/test`);
};

export const loginApi = ({email, password}) => {
	return axios.post(`${BASE_API_URL}auth/login`, {email, password});
};
