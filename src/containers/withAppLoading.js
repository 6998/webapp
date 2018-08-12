import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {...state, ...state.isLoadingApp}
};

const withAppLoading = connect(mapStateToProps);

export default withAppLoading;
