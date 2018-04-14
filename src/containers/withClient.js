import { connect } from "react-redux";

const mapStateToProps = (state, props) => {
  console.log(state)
  let user = null;
  if(state.cognito === "LOGGED_IN")
    user = state.cognito.user;
  return {...props, user}
}

const withToken = connect(mapStateToProps);

export default withToken;
