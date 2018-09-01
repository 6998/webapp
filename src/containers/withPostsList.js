import { connect } from "react-redux";

const mapStateToProps = (state, props) => {
  const {postsList} = state;
  return {...state, postsList}
};

const withExample = connect(mapStateToProps);

export default withExample;
