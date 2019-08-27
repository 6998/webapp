import React from "react";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "react-select";
import FormControl from "@material-ui/core/FormControl/FormControl";
import Grid from "@material-ui/core/Grid/Grid";

class CreateChart extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  renderListOfCharts = () => {
    const { chartTypes } = this.props;
    const options = chartTypes.map(chartType => {
      const { id, name, description } = chartType;
      return { value: id, label: name };
    });

    return (
      <Select
        // value={selectedOption}
        // onChange={this.handleChange}
        options={options}
        isSearchable={false}
      />
    );
  };

  render() {
    const { renderListOfCharts } = this;
    return (
      <React.Fragment>
				tests
        {/*<Grid xs={3} spacing={0}>*/}
          {/*<Grid*/}
            {/*container*/}
            {/*direction="column"*/}
            {/*justify="center"*/}
            {/*alignItems="center"*/}
            {/*pacing={0}*/}
          {/*>*/}
            {/*<Grid item xs={12}>*/}
              {renderListOfCharts()}
            {/*</Grid>*/}
          {/*</Grid>*/}
        {/*</Grid>*/}
      </React.Fragment>
    );
  }
}

export default CreateChart;
