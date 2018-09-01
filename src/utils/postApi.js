import { BASE_API_URL } from '../lib/appConstants';
import axios from 'axios';

export const postList = () => {
	return axios.get(`${BASE_API_URL}medium/list`);
};


