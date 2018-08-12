import { connect } from "react-redux";

const mapStateToProps = (state, props) => {
  return {...state, ...state.auth}
};

const withExample = connect(mapStateToProps);

export default withExample;
