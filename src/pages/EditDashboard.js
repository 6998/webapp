import React from "react";
import { connect } from "react-redux";
import { css } from "react-emotion";
import { PropagateLoader } from "react-spinners";
import { fetchChartsTypes } from "../actions/chartsTypes";
import { chartTypes, isFetchChartTypes } from "../selectors/chartsTypes";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Select from "@material-ui/core/Select/Select";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import FormControl from "@material-ui/core/FormControl/FormControl";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import { show } from 'redux-modal'
import CreateChart from "../components/CreateChart";

const override = css`
  display: block;
  margin: auto;
  border-color: red;
  width: 0;
  padding-top: 100px;
`;

class EditDashboard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.fetchChartsTypes();
		this.props.show('antd')
  }

  get isLoading() {
    const { isFetchChartTypes } = this.props;
    return !isFetchChartTypes;
  }

  get renderLoadingState() {
    return <PropagateLoader sizeUnit={"px"} size={15} className={override} />;
  }

  render() {
    const {chartTypes} = this.props;
    const { isLoading, renderLoadingState } = this;
    if (isLoading) return renderLoadingState;

    return (
			<Grid container spacing={3}>
				<Grid item xs={12}>
          <CreateChart chartTypes={chartTypes}/>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  chartTypes: chartTypes(state),
  isFetchChartTypes: isFetchChartTypes(state)
});

const mapDispatchToProps = {
  fetchChartsTypes,
	show
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditDashboard);
