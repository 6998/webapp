import {experimentActionTypes} from '../lib/actionTypes'
import experimentApi from '../lib/api/experimentsApi'
const experimentActions = {

  send({config, codeArr, options, user, accessKey, secret}){
    return dispatch => {
      dispatch({type: experimentActionTypes.SEND_EXPERIMENTS});

      const apigClient = experimentApi.newClient(config);
      const params = {};
      const additionalParams = {headers : {}};
      const body = {codeArr, options, user, accessKey, secret};

      return apigClient.createExperimentsPost(params, body, additionalParams).then(response=>{
          return {
            type: experimentActionTypes.RECIEVE_EXPERIMENTS,
            data: response
          }
        window.location.href = "/runs"
        }).catch(e=>{
          console.log(e)
        });
    }
  },

  getRuns(token) {
    return experimentApi.get(token).then(response=>{
      return {
        type: experimentActionTypes.RECIEVE_EXPERIMENTS,
        data: response
      }
    }).catch(e=>{
      console.log(e)
    });
  }
};


export default experimentActions