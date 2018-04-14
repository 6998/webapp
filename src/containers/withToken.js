import { connect } from "react-redux";

const mapStateToProps = (state, props) => {
  console.log()
  const token = state.cognito.user.signInUserSession.idToken.jwtToken;
  return {...props, token}
}

const withToken = connect(mapStateToProps);

export default withToken;
