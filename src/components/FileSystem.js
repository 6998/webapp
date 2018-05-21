import React, { Component } from 'react';

const systemArr = [];
class FileSystem extends React.Component {
  constructor(props) {
    super(props);
    this.system(this.props.files, null, 0)

  }

  indent(indent) {
    let symbol = "--";
    let str = "";
    for(let i = 0 ; i < indent; i++) {
      str += symbol;
    }
    return str
  }

  renderDir(name, parent, indent) {
    const str = this.indent(indent);
    const key = `${parent}-${name}}`
    const item = <div className="dir" >{str} <span key={key}></span>{name}</div>;
    return item;
  }

  renderFile(name, parent, indent) {
    const str = this.indent(indent);
    const key = `${parent}-${name}}`
    const item = <div className="file" >{str} <span key={key}></span>{name}</div>;
    return item;
  }

  system(system, parent, indent) {
    indent++;
    for(let key in system) {
      const item = system[key];
      if(key === "__meta")
        continue;
      if(item.__meta.type === "file") {
        systemArr.push(this.renderFile(key, parent, indent))
      } else if(item.__meta.type === "dir"){
        systemArr.push(this.renderDir(key, parent, indent))
        this.system(item, key, indent);
      }
    }
  }

  render () {
    return <div className="fileSystem">
      {systemArr}
    </div>
  }
}

export default FileSystem