import React from 'react';
import keycode from 'keycode';
import Downshift from 'downshift';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import Chip from '@material-ui/core/Chip/Chip';
import Paper from '@material-ui/core/Paper/Paper';
import TextField from '@material-ui/core/TextField/TextField';
import chartsActions from '../actions/chartsActions';
import connect from 'react-redux/es/connect/connect';

function renderSuggestion({
  suggestion,
  index,
  itemProps,
  highlightedIndex,
  selectedItem
}) {
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || '').indexOf(suggestion.filename) > -1;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.filename}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400
      }}
    >
      {suggestion.filename}
    </MenuItem>
  );
}

function renderInput(inputProps) {
  const { InputProps, classes, ref, ...other } = inputProps;

  return (
    <TextField
      InputProps={{
        inputRef: ref,
        classes: {},
        ...InputProps
      }}
      {...other}
    />
  );
}

class DownshiftImpl extends React.PureComponent {
  constructor(props) {
    super();
    const changeChartForUserTo = props.chartsForUser.filter(filename => {
      return props.allCharts.find(chart => chart.fid === filename)
    });

		const chartsForUser = this.mapIdsToNames(changeChartForUserTo, props.allCharts);

    this.state = {
      selectedItem: chartsForUser,
      suggestions: props.allCharts,
      inputValue: ''
    };

    this.getSuggestions = this.getSuggestions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.findChartsByName = this.findChartsByName.bind(this);
    this.findChartsById = this.findChartsById.bind(this);
    this.updateListAction = this.updateListAction.bind(this);
  }

  handleKeyDown = event => {
    const { inputValue, selectedItem } = this.state;
    if (
      selectedItem.length &&
      !inputValue.length &&
      keycode(event) === 'backspace'
    ) {
      this.setState({
        selectedItem: selectedItem.slice(0, selectedItem.length - 1)
      });
    }
  };

  handleInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleDelete = item => () => {
    this.setState(state => {
      const selectedItem = [...state.selectedItem];
      selectedItem.splice(selectedItem.indexOf(item), 1);
      this.updateListAction(selectedItem);
      return { selectedItem };
    });
  };

  getSuggestions(inputValue) {
    let count = 0;
    const { suggestions } = this.state;
    return suggestions.filter(suggestion => {
      const keep =
        (!inputValue ||
          suggestion.filename
            .toLowerCase()
            .indexOf(inputValue.toLowerCase()) !== -1) &&
        count < 5;

      if (keep) {
        count += 1;
      }

      return keep;
    });
  }

  handleChange(item) {
    let { selectedItem } = this.state;

    if (selectedItem.indexOf(item) === -1) {
      selectedItem = [...selectedItem, item];
    }

    this.updateListAction(selectedItem);

    this.setState({
      inputValue: '',
      selectedItem
    });
  }

  updateListAction(selectedItem) {
    const {userId} = this.props;
    const charts = this.mapNamesToIds(selectedItem);
    this.props.dispatch(chartsActions.updateCharts(charts, userId));
  }

  findChartsByName = name =>
    this.state.suggestions.find(item => item.filename === name);
  findChartsById = (id, suggestions) =>
    suggestions.find(item => item.fid === id);

  mapIdToObject = (items, suggestions) =>
    items.map(item => this.findChartsById(item, suggestions));
  mapObjectToName = items => items.map(item => item.filename);
  mapIdsToNames = (items, suggestions) =>
    this.mapObjectToName(this.mapIdToObject(items, suggestions));

  mapNameToObject = items => items.map(item => this.findChartsByName(item));
  mapObjectToId = items => items.map(item => item.fid);
  mapNamesToIds = items => this.mapObjectToId(this.mapNameToObject(items));

  render() {
    const { inputValue, selectedItem } = this.state;
    return (
      <Downshift
        id="downshift-multiple"
        inputValue={inputValue}
        onChange={this.handleChange}
        selectedItem={selectedItem}
      >
        {({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue: inputValue2,
          selectedItem: selectedItem2,
          highlightedIndex
        }) => (
          <div>
            {renderInput({
              fullWidth: true,
              InputProps: getInputProps({
                startAdornment: selectedItem.map(item => (
                  <Chip
                    key={item}
                    tabIndex={-1}
                    label={item}
                    onDelete={this.handleDelete(item)}
                  />
                )),
                onChange: this.handleInputChange,
                onKeyDown: this.handleKeyDown,
                placeholder: 'Select multiple charts'
              }),
              label: 'filename'
            })}
            {isOpen ? (
              <Paper square>
                {this.getSuggestions(inputValue2).map((suggestion, index) =>
                  renderSuggestion({
                    suggestion,
                    index,
                    itemProps: getItemProps({ item: suggestion.filename }),
                    highlightedIndex,
                    selectedItem: selectedItem2
                  })
                )}
              </Paper>
            ) : null}
          </div>
        )}
      </Downshift>
    );
  }
}

DownshiftImpl.defaultProps = {
	chartsForUser: []
}

export default connect()(DownshiftImpl);
