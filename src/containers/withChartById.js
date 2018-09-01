import { connect } from 'react-redux';

const mapStateToProps = (state, props) => {
  const { chartId } = props;
  const { charts } = state;
  const { chartsData } = charts;
  let chartData = chartsData[chartId];
  if (!chartData) chartData = { isLoading: true };
  return { ...state, ...chartData };
};

const withExample = connect(mapStateToProps);

export default withExample;
