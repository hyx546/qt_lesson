import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Toast extends Component {
  state = {
    toastList: [
      '1','2'
    ]
  }
  addNotice(icon,content,duration) {
    console.log("1");
  }
  render() {
    const { toastList } = this.state;
    const { show} =this.props;
    if  (!show) return null;
    return (
      <>
      {
        toastList.map( (toast) => {
          return (
            // <Notice {...toast} />
          <li ref="ref1">{toast}</li>
          )
        })
      }
      </>
    )
  }
}

export default {
  addNotice: function(icon,content,duration){
    // ref  
    let div = document.createElement('div');
    let objRef = React.createRef();
    // 获取这个组件的实例
    ReactDom.render(<Toast ref={objRef}/> ,div)
    return objRef.current.addNotice(icon,content,duration)
  }
};