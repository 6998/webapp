import { connect } from "react-redux";

const mapStateToProps = (state, props) => {
  const {singlePost} = state;
  return {...state, singlePost}
};

const withNewPost = connect(mapStateToProps);

export default withNewPost;
