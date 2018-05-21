import React, {Component} from 'react';
import CometButton from '../generics/ComentButton'

class GenericTable extends React.Component {
  constructor(props) {
    super(props);
    this.renderHeadTh = this.renderHeadTh.bind(this);
    this.renderRows = this.renderRows.bind(this);
  }

  renderHeadTh() {
    const columns = this.props.columns;
    if (!columns)
      return null;

    return columns.map((item, index) => {
      if (!item.name)
        return null;
      return <th scope="col" key={index}>{global.names(item.name)}</th>
    })
  }

  renderRows() {
    const rows = this.props.rows;
    const columns = this.props.columns;
    if (!columns || !rows)
      return null;

    return rows.map((rowItem, rowIndex) => {
      const items = [];
      columns.forEach(el => {
        const data = rowItem[el.name] ? rowItem[el.name] : null;
        const col = {
          data,
          col: el
        };
        items.push(col)
      });


      const tds = items.map((td, tdIndex) => {
        const scope = tdIndex === 0 ? "row" : null;
        const container = td.col.container ? td.col.container : "span";
        let props = td.col.props ? td.col.props : null;
        let ele;
        if(Array.isArray(td.data)) {
          ele =  td.data.map((el, tdArrKey)=>{
            props.key = `${rowIndex}-${tdIndex}-${tdArrKey}`;
            return React.createElement(container, props, el);
          });
        } else if(typeof td.data === "object") {
          props = Object.assign(props, td.data);
          ele = React.createElement(container, props, null);
        } else {
          ele = React.createElement(container, props, td.data);
        }
        return <td key={tdIndex} scope={scope}>{ele}</td>

      });
      return <tr key={rowIndex}>{tds}</tr>
    })
  }

  render() {
    return <table className="table table-dark table-hover">
      <thead>
      <tr>
      {this.renderHeadTh()}
      </tr>
      </thead>
      <tbody>
      {this.renderRows()}
      </tbody>
    </table>
  }
}


export default GenericTable