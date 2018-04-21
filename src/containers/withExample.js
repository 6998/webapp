import { connect } from "react-redux";

const mapStateToProps = (state, props) => {
  return {...state, example: state.example.data}
};

const withExample = connect(mapStateToProps);

export default withExample;
