import { BASE_API_URL } from '../lib/appConstants';
import axios from 'axios';

export const authApi = () => {
  return axios.get(`${BASE_API_URL}auth/test`, {withCredentials: true});
};

export const loginApi = ({password, username}) => {
	return axios.post(`${BASE_API_URL}auth/login`, {password, username}, {withCredentials: true});
};

export const changePasswordApi = (password, id) => {
	return axios.post(`${BASE_API_URL}auth/change-password`, {password, id});
};