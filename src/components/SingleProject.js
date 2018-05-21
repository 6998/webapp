import React, { Component } from 'react';
import FileSystem from './FileSystem'
import {genericFileSystem} from '../../../cross-platforms/generic-templates'

class SingleProject extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...this.props.project,
      disabled: true,
      expend: false
    };
    this.updateItem = this.updateItem.bind(this)
    this.save = this.save.bind(this);
    this.expendIcon = this.expendIcon.bind(this)
    this.editIcon = this.editIcon.bind(this)
    this.renderBranches = this.renderBranches.bind(this)
  }

  updateItem(key, event) {
    const newState = this.state;
    newState[key] = event.target.value;
    this.setState(newState)
  }

  save() {
    this.setState({disabled: !this.state.disabled})
  }

  expendIcon() {
    let btn
    if(this.state.expend)
      btn = "Close"
    else
      btn = "Open"
    return <button className="btn btn-frame btn-empty" onClick={()=>{this.setState({expend: !this.state.expend})}}>{btn}</button>
  }

  editIcon() {
    let btn
    if(this.state.disabled)
      btn = "Edit"
    else
      btn = "Save"
    return <button className="btn btn-frame" onClick={this.save}>{btn}</button>
  }

  allExperimentIcon () {
    const btn = <i class="fas fa-list icon"></i>;
    return <button className="btn btn-frame">View Runs {}</button>
  }

  renderBranches() {
    return this.state.branches.map((item, key)=><option value={item.name} key={key}>{item.name}</option>)
  }

  render() {
    const isGithub = this.state.isGithub;
    return <div className="single-project col">
      <div className="row buttons">
        <div className="sub-menu pull-right">
          {this.expendIcon()}
          {this.editIcon()}
          {this.allExperimentIcon()}
        </div>
      </div>
      <div className="row body">
          <div className="col-md-3">
            <input type="text" value={this.state.id} disabled={true}/>
            <label>
              Project Id
            </label>
          </div>
          <div className="col-md-3">
            <input type="text" onChange={(event)=>{this.updateItem("name", event)}} value={this.state.name} disabled={this.state.disabled}/>
            <label>
              Project Name
            </label>
          </div>
          <div className="col-md-3">
            <input type="password" onChange={(event)=>{this.updateItem("cometApi", event)}} value={this.state.cometApi} disabled={this.state.disabled}/>
            <label>
              Comet API Key
            </label>
          </div>
          <div className="col-md-3">
          {this.state.isGithub ? <i className="fab fa-github-square"></i> : <i className="fas fa-laptop"></i> }
              <label>
              Type
            </label>
          </div>
          {this.state.expend && isGithub && <div className="col-md-3 expend">
            <select type="text" onChange={(event)=>{this.updateItem("name", event)}} value={this.state.name} disabled={this.state.disabled}>
              {this.renderBranches()}
            </select>
            <label>
              Branch
            </label>
          </div>}
          {this.state.expend && <div className="col-md-3 expend">
            {this.state.lastActive}
            <label>
            {global.names("lastActive")}
            </label>
          </div>}
          {this.state.expend && <div className="col-md-3 expend">
            {this.state.completed}
            <label>
              {global.names("completed")}
            </label>
          </div>}
          {this.state.expend && <div className="col-md-3 expend">
            {this.state.active}
            <label>
              {global.names("active")}
            </label>
          </div>}
          {this.state.expend && <div className="col-md-12"></div>}
          {this.state.expend && <div className="col-md-6 expend">
              <h3>File System</h3>
              <FileSystem files={genericFileSystem} />
            </div>}
          {this.state.expend && <div className="col-md-6 expend">
              <h3>Run Commands {this.state.disabled && <span className="click-edit">(Click Edit)</span>}</h3>
              <textarea onChange={(event)=>{this.updateItem("runCmd", event)}} value={this.state.runCmd} disabled={this.state.disabled}/>
          </div>}
      </div>
    </div>
  }
}

export default SingleProject