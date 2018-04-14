import React from 'react';
import { connect } from 'react-redux';
import './list-style.css'


class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  scroll(){
    var list = document.getElementById('list');
    if(list)
      list.scrollTop = 99999;
  }

  render() {
    let list;
    if(this.props.list)
     list = this.props.list.map((item, i)=>{
       const className = item.type === "bot" ? "bot" : "you";
       return <li className="col-md-12" key={i}>
         <div className={className}><span className="sub">{className}</span> <span className="content">{item.unstructured.text} </span></div>
       </li>
    });
    this.scroll();
    const loading = this.props.loading;

    return (
      <div className="col-md-6 col-md-offset-3">
        <h4>
          { ( !list || !list.length) ? "Talk to the Bot" : ""}
        </h4>

        <ul className="row" id="list">
          { list }
          { loading &&
          <li className="col-md-12 loading">
            Bot is writing...
          </li>
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const obj = {list: state.message.list, loading: state.message.loading};
  return obj;
}


export default connect(mapStateToProps, null)(Messages);

