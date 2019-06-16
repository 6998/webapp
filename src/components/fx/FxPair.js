import React from 'react';
import classnames from 'classnames';

class FxPair extends React.Component {
  render() {
    const { from, to, rate } = this.props;
    const isPending = !rate;
    const classes = classnames('fx-pair', { pending: isPending });
    return (
      <div className={classes}>
        <div>
          <div className="currency">
            {from}
            <span className="symbol">$</span>
          </div>
          <div className="arrows">
						{isPending ? "Loading" : rate}
					</div>
          <div className="currency">
            {to}
            <span className="symbol">$</span>
          </div>
        </div>
      </div>
    );
  }
}

export default FxPair;
