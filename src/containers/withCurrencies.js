import { connect } from "react-redux";

const mapStateToProps = (state, props) => {
  return {...state, currenciesList: state.currencies.currencies}
};

const withExample = connect(mapStateToProps);

export default withExample;
