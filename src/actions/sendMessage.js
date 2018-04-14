import apigClientFactory from '../api'

export function sendMessage(body, config){
  return function(dispatch){

    const apigClient = apigClientFactory.newClient(config);
    const params = {};
    const additionalParams = {headers : {}};
    dispatch({type: 'NEW_MESSAGE', msg: body})
    dispatch({type: 'START_NEW_MESSAGE'})
    apigClient.chatbotPost(params, body, additionalParams)
    .then(response=>{
      dispatch({type: 'NEW_MESSAGE', msg: response.data})
    })


  }
}


export default sendMessage