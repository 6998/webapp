import { connect } from 'react-redux';

const mapStateToProps = (state, props) => {
  const { charts } = state;
  const { chartsForUser } = charts;
  return { ...state, ...chartsForUser };
};

const withExample = connect(mapStateToProps);

export default withExample;
