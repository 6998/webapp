import { connect } from "react-redux";

const mapStateToProps = (state, props) => {

  if(state.cognito){
    console.log(state.cognito)
    const user = state.cognito.user;
    const cognitoState = state.cognito.state;
    return {...props, state: cognitoState, user}
  }
  return {...props}
};

const withCognito = connect(mapStateToProps);

export default withCognito;
