import { connect } from "react-redux";

const mapStateToProps = (state, props) => {
  return {...state}
};

const withExample = connect(mapStateToProps);

export default withExample;
