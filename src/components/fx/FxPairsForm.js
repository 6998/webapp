import React from 'react';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import Select from '@material-ui/core/Select/Select';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import FormControl from '@material-ui/core/FormControl/FormControl';
import Grid from '@material-ui/core/Grid/Grid';
import Button from '@material-ui/core/Button/Button';

class AddFxPairForm extends React.Component {
  static getDerivedStateFromProps(props, state) {
    return { ...state, ...props };
  }

  constructor(props) {
    super(props);
    this.state = {
			currencies: Object.values(props.currencies),
			from: "USD",
			to: "ISL"
		};
    this.dropDown = this.dropDown.bind(this);
    this.currenciesList = this.currenciesList.bind(this);
    this.submit = this.submit.bind(this);
  }

  currenciesList() {
  	const list = [];
  	for(let key in this.props.currencies)
  		list.push(this.props.currencies[key])
		return list;
	}

  dropDown(type) {

  	const options = this.currenciesList().map(currency => (
			<MenuItem value={currency.code} key={currency.code}>
				{currency.name} - {currency.symbol}
			</MenuItem>
		));

    return (
      <FormControl>
        <InputLabel htmlFor="age-simple">{type}</InputLabel>
        <Select
          value={this.state[type]}
          onChange={(e)=>this.handleClick(e, type)}
          inputProps={{
            name: type,
            id: type
          }}
        >
					{options}
        </Select>
      </FormControl>
    );
  }

  handleClick(event, type) {
  	const value = event.target.value;
		this.setState({...this.state, [type]: value});
  }

  submit() {
  	const {from, to} = this.state;
		const pair = {from, to};
		this.props.handleClick(pair);
	}

  render() {
    return (
      <Grid container className="add-currency-form">
        <Grid xs={4}>
          {this.dropDown('from')}
        </Grid>
        <Grid xs={4}>
          {this.dropDown('to')}
        </Grid>
        <Grid xs={4}>
					<Button className='add' onClick={this.submit}>Add</Button>
        </Grid>
      </Grid>
    );
  }
}

export default AddFxPairForm;
