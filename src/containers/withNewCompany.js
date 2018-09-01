import { connect } from "react-redux";

const mapStateToProps = (state, props) => {
  const {singleCompany} = state;
  return {...state, ...singleCompany}
};

const withExample = connect(mapStateToProps);

export default withExample;
