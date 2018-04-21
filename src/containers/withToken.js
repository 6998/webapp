import { connect } from "react-redux";

const mapStateToProps = (state, props) => {
  let token = null;
  if(state.cognito.state === "LOGGED_IN")
    token = state.cognito.user.signInUserSession.accessToken.jwtToken;
  return {...props, token}
}

const withToken = connect(mapStateToProps);

export default withToken;
