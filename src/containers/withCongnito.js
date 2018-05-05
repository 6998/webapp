import { connect } from "react-redux";

const mapStateToProps = (state, props) => {

  if(state.cognito){
    let token;
    if(state.cognito.state === "LOGGED_IN")
      token = state.cognito.user.signInUserSession.accessToken.jwtToken;
    const user = state.cognito.user;
    const cognitoState = state.cognito.state;
    const config = state.cognito.config;
    const cognito = state.cognito;
    return {...props, state: cognitoState, user, token, config, cognito}
  }
  return {...props}
};

const withCognito = connect(mapStateToProps);

export default withCognito;
