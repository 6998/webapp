import axios from 'axios';
import { URL } from '../../lib/constants';

const userApi = {
    fetchUser(token) {
    const url = `${URL}user/auth`;
    const headers = {headers: { Authorization: token }}
    return axios.get(url, headers).then(res => res.data);
  },

}

export default userApi;
