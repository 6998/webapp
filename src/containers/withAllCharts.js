import { connect } from "react-redux";

const mapStateToProps = (state, props) => {
  const {charts} = state;
  const {allCharts} = charts;
  return {...state, ...allCharts}
};

const withExample = connect(mapStateToProps);

export default withExample;
