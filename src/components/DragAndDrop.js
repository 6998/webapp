import React from 'react';
import FileDrop from 'react-file-drop';

class DragAndDrop extends React.Component {
  handleDrop = (files, event) => {
    console.log(files, event);
  };

  render() {
    const styles = {
      border: '1px solid black',
      width: 600,
      color: 'black',
      padding: 20,
    };
    return (
      <div className='drag-and-drop' style={{ styles }}>
        <FileDrop onDrop={this.handleDrop}>Drag a File</FileDrop>
      </div>
    );
  }
}

export default DragAndDrop;
