import React, { Component } from 'react';
import classNames from 'classnames'

let codeArr = [];
class Code extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lines: '', selected: {}};
    this.renderLines = this.renderLines.bind(this);
    this.handleWordClick = this.handleWordClick.bind(this);
    this.removeOps = this.removeOps.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  handleWordClick(i, j, word) {
    const selected = this.state.selected;
    selected[`${i}_${j}`] = selected[`${i}_${j}`] ? false : word;
    this.setState({selected});
    this.props.handleSelectedChange(codeArr, selected);
  }

  removeOps(key) {
    const selected = this.state.selected;
    delete selected[key];
    this.setState({selected});
  }

  breakLine(line, lineNum) {
    const broken = line.split(/(\s|,|\"|\'|=|\(|\)|\[|\]|\[|\{|\})/);
    let i = 0;
    let arr = [];
    broken.forEach((el, index)=>{
      let str;
      str = el.replace(/\t/g, '&nbsp;&nbsp;');
      codeArr[lineNum][index] = str;
      const isSelected = this.state.selected[`${lineNum}_${index}`];

      var spanClasses = classNames({
        'selected-word': isSelected ? true : false
      });
      const wordSpan = <span className={spanClasses} key={`${lineNum}-${index}`} dangerouslySetInnerHTML={{__html: str}} onClick={()=>{this.handleWordClick(lineNum, index, el)}}></span>;
      arr.push(wordSpan);
    });
    if(arr[0] === "")
    arr = arr.slice(1);
    return arr;
  }

  renderLines(){
    if(!this.props.code)
      return;
    codeArr = [];
    const arr = [];
    const codeInLines = this.props.code.split("\n");
    let i = 1;

    for(let i = 0; i < codeInLines.length; i++) {
      codeArr.push([]);
    }

    codeInLines.forEach((item, key)=>{
      if(!item)
        return;
      const formattedLine = this.breakLine(item, key);
      const div = <div className="line" key={`line_${key}`}>
        <div className="number">
          {i++}
        </div>
          <div className="content">
            {formattedLine}
          </div>
        </div>;
      arr.push(div);
    });

    return arr;
  }

  render() {
    const lines = this.renderLines();
    return <div className="code">
      {lines}
    </div>;
  }
}

export default Code