import React, {Component} from 'react';
import {withRouter} from 'react-router'
import Code from '../Code'

class NewExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {code: '', rawCode: '', step: 1, options: {}, codeArr: null, projectName: ""};
    this.step2 = this.step2.bind(this)
    this.step2 = this.step2.bind(this)
    this.onSubmitStep1 = this.onSubmitStep1.bind(this)
    this.handleSelectedChange = this.handleSelectedChange.bind(this)
    this.setOptions = this.setOptions.bind(this)
    this.renderOptions = this.renderOptions.bind(this)
    this.removeOption = this.removeOption.bind(this)
    this.updateProjectName = this.updateProjectName.bind(this)

    this.updateTypeForOptions = this.updateTypeForOptions.bind(this)
    this.updateValuesForOptions = this.updateValuesForOptions.bind(this)
    this.updateRangeFromOptions = this.updateRangeFromOptions.bind(this)
    this.updateRangeToForOptions = this.updateRangeToForOptions.bind(this)
    this.send = this.send.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  changeRawCode = (event) => {
    this.setState({rawCode: event.target.value});
  };

  onSubmitStep1() {
    this.setState({step: 2})
  }

  setOptions(options) {
    const newOptinos = this.state.options;
    for (let key in newOptinos) {
      if (!options[key]) {
        this.removeOption(key)
      }
    }

    for (let key in options) {
      if (!newOptinos[key]) {
        newOptinos[key] = {
          word: options[key],
          values: "0",
          type: "string",
          key,
          rangeOrType: "range",
          jumps: 0.1,
          range: {
            from: 0,
            to: 1
          }
        };
      }
    }

    this.setState({options: newOptinos});
  }

  handleSelectedChange(codeArr, selected) {
    this.setOptions(selected);
    this.setState({codeArr});
  }

  send() {
    const codeArr = this.state.codeArr;
    const options = this.state.options;
    const user = this.props.userAttributes.sub;
    const projectName = this.state.projectName.replace(/\s/g, '_');


    const config = {
      accessKey: this.props.cognito.creds.accessKeyId,
      secretKey: this.props.cognito.creds.secretAccessKey,
      sessionToken: this.props.cognito.creds.sessionToken,
      region: 'us-east-1',
      apiKey: undefined,
      defaultContentType: 'application/json',
      defaultAcceptType: 'application/json'
    };
  }

  updateValuesForOptions(event, key) {
    const newOptinos = this.state.options;
    newOptinos[key].values = event.target.value;
    this.setState({options: newOptinos});
  }

  removeOption(key) {
    const newOptinos = this.state.options;
    delete newOptinos[key];
    this.setState({options: newOptinos});
    this.code.removeOps(key);
  }

  updateIsRangeForOptions(event, key) {
    const newOptinos = this.state.options;
    newOptinos[key].rangeOrType = event.target.value;
    this.setState({options: newOptinos});
  }

  updateJumpsForOptions(event, key) {
    const newOptinos = this.state.options;
    newOptinos[key].jumps = event.target.value;
    this.setState({options: newOptinos});
  }

  updateRangeFromOptions(event, key) {
    const newOptinos = this.state.options;
    newOptinos[key].range.from = event.target.value;
    this.setState({options: newOptinos});
  }

  updateRangeToForOptions(event, key) {
    const newOptinos = this.state.options;
    newOptinos[key].range.to = event.target.value;
    this.setState({options: newOptinos});
  }

  updateTypeForOptions(event, key) {
    const newOptinos = this.state.options;
    newOptinos[key].type = event.target.value;
    this.setState({options: newOptinos});
  }

  updateProjectName(event) {
    this.setState({projectName: event.target.value});
  }

  renderOptions() {
    const options = this.state.options;
    const arr = [];

    for (let key in options) {
      const item = options[key];
      const div = <div className="options" key={key}>
        <div className="remove" onClick={() => {
          this.removeOption(key)
        }}>Remove
        </div>
        <div className="item">
          Parameter: <i>{item.word}</i>
        </div>
        <div className="item">
          <div className="text">
            Param Type
          </div>
          <select onChange={(event) => {
            this.updateTypeForOptions(event, key)
          }} value={item.type}>
            <option value="number">Number</option>
            <option value="string">Text</option>
            <option value="boolean">Boolean</option>
          </select>
        </div>
        <div className="item">
          <div className="text">
            Range or Options
          </div>
          <select onChange={(event) => {
            this.updateIsRangeForOptions(event, key)
          }} value={item.rangeOrType}>
            <option value="range">Range (1-20)</option>
            <option value="options">Options (true, false}</option>
          </select>
        </div>
        {item.rangeOrType === "options" && <div className="item">
          <div className="text">
            Values
          </div>
          <input type="text" value={item.values} onChange={(event) => {
            this.updateValuesForOptions(event, key)
          }}/>
        </div>}
        {item.rangeOrType === "range" && <div className="item">
          <div className="text">
            From
          </div>
          <input type="text" value={item.range.from} onChange={(event) => {
            this.updateRangeFromOptions(event, key)
          }}/>
        </div>}
        {item.rangeOrType === "range" && <div className="item">
          <div className="text">
            To
          </div>
          <input type="text" value={item.range.to} onChange={(event) => {
            this.updateRangeToForOptions(event, key)
          }}/>
        </div>}
        {item.rangeOrType === "range" && <div className="item">
          <div className="text">
            Steps
          </div>
          <input type="text" value={item.jumps} onChange={(event) => {
            this.updateJumpsForOptions(event, key)
          }}/>
        </div>}
      </div>;
      arr.push(div);
    }
    return arr;
  }

  step1() {
    return <div>
      <h3>
        Submit your code bellow
      </h3>
      <textarea className="raw-code" value={this.state.rawCode} onChange={this.changeRawCode}></textarea>
      <div>
        <button onClick={this.onSubmitStep1} className="center">Next</button>
      </div>
    </div>
  }

  step2() {
    const options = this.renderOptions();
    return <div>
      <div className="row buttons-row">
        <div className="col-md-4">
          <input type="password" placeholder="Comet.ml Api Key"/>
        </div>
        <div className="col-md-4">
          <input type="text" placeholder="Project Name" onChange={this.updateProjectName}/>
        </div>
        <div className="col-md-4">
          <button className="btn btn-border" onClick={this.send}> Submit Experiences</button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-9">
          <h3>
            Code
          </h3>
          <Code
            code={this.state.rawCode}
            handleSelectedChange={this.handleSelectedChange}
            ref={(elem) => (this.code = elem)}
          />
        </div>
        <div className="col-md-3">
          <h3>
            Options
          </h3>
          <div>
            {options}
          </div>
        </div>
      </div>
    </div>
  }

  render() {
    console.log(this.props)
    return <div>
      <h1>New Experience</h1>
      {this.state.step === 1 && this.step1()}
      {this.state.step === 2 && this.step2()}
    </div>;
  }
}

export default withRouter(NewExperience)