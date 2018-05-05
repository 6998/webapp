import { connect } from "react-redux";

const mapStateToProps = (state, props) => {
  let user = state.cognito.user;
  let userAttributes = state.cognito.attributes;

  return {...props, user, userAttributes}
}

const withToken = connect(mapStateToProps);

export default withToken;
