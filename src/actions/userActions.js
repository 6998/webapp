import {userActionTyes} from '../lib/actionTypes'
import userApi from '../lib/api/userApi'
const userActions = {
  fetchUser(token){
    return dispatch => {
      console.log(token)
      dispatch({type: userActionTyes.START_FETCH_USER});
      return userApi.fetchUser(token).then(user => {
        console.log(user)
        // dispatch({type: userActionTyes.START_FETCH_USER, user});
        return {
          type: userActionTyes.FETCH_USER,
          data: test
        }
      }).catch(e=>{
        console.log(e)
      });
    }
  }
};


export default userActions