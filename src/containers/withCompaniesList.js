import { connect } from "react-redux";

const mapStateToProps = (state, props) => {
  const {companiesList} = state;
  return {...state, companiesList}
};

const withExample = connect(mapStateToProps);

export default withExample;
