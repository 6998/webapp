import React from 'react';
import { connect } from 'react-redux';
import msgAction from '../actions/sendMessage'

class Textbox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleCLick = this.handleCLick.bind(this);
    this.state = {msg: ""};
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  handleChange(event) {
    this.setState({msg: event.target.value});
  }

  handleCLick(){
    const creds = this.props.creds;
    if(!creds || !creds.secretAccessKey || !this.state.msg || this.state.msg === "")
      return;


    const config = {
      accessKey: creds.accessKeyId,
      secretKey: creds.secretAccessKey,
      sessionToken: creds.sessionToken,
      region: 'us-west-2',
      apiKey: undefined,
      defaultContentType: 'application/json',
      defaultAcceptType: 'application/json'
    };


    const body = {
      "messages": [
        {
          "type": "string",
          "unstructured": {
            "id": "Bjarne",
            "text": this.state.msg,
            "timestamp": new Date().toUTCString()
          }
        }
      ]
    };


   this.props.dispatch(msgAction(body, config));
   this.setState({msg: ""})
  }


  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="col-md-10">
              <input
                type="text"
                className="form-control"
                placeholder="Talk to me"
                value={this.state.msg}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-md-2">
              <button className="btn btn-info form-control"
                      onClick={this.handleCLick}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const obj = {creds: null};
  if(state.cognito && state.cognito.creds)
    obj.creds = state.cognito.creds;

  return obj;
}


export default connect(mapStateToProps, null)(Textbox);

