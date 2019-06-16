import React from 'react';
import withUser from '../../containers/withUser';
import withCurrencies from '../../containers/withCurrencies';
import fxPairsAction from '../../actions/fxPairsAction';
import Grid from '@material-ui/core/Grid/Grid';
import AddFxPairForm from '../fx/FxPairsForm';
import withFx from '../../containers/withFxPairs';
import FxPair from '../fx/FxPair';

class FxRates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isListLoaded: false
    };
    this.form = this.form.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.isLoading = this.isLoading.bind(this);
    this.rates = this.rates.bind(this);
  }

  componentDidMount() {
    // this.props.dispatch(fxCurrenciesAction.getCurrenciesList());
    // this.props.dispatch(fxPairsAction.getCurrenciesList());
  }

  form() {
    const { currenciesList } = this.props;
    return (
      <Grid item xs={12} lg={6}>
        <AddFxPairForm
          handleClick={this.handleClick}
          currencies={currenciesList}
        />
      </Grid>
    );
  }

  isLoading() {
    return (
      this.props.fxPairs.isLoadingFxPairs ||
      this.props.currencies.isLoadingCurrencies
    );
  }

  handleClick(pair) {
    const { fxPairs } = this.props;
    const newPairs = [...fxPairs, pair];
    this.props.dispatch(fxPairsAction.updatePairs(newPairs));
  }

  rates() {
    const { fxPairs } = this.props;
    return fxPairs.map(pair => (
      <Grid item xs={12}>
        <FxPair {...pair} />
      </Grid>
    ));
  }

  render() {
    return (
      <div className="fx-rates-page">
        <iframe
          src="https://www.widgets.investing.com/live-currency-cross-rates?theme=darkTheme&cols=bid,ask,prev,changePerc&pairs=1,63,64,2,65,3,1899,7,1528,5,1492,66,2103,2111,4,1550,39,17,10417,160,1031403,1623,8,6,9,43,9583"
          width="100%"
          height="100%"
          frameBorder="0"
          allowTransparency="true"
          marginWidth="0"
          marginHeight="0"
          className="rates"
          titl="fx-ratesChartsDashboard"
        />
      </div>
    );
  }
}

export default withUser(withCurrencies(withFx(FxRates)));
