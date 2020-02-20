import React, { Component} from 'react';
import {  connect} from 'react-redux'; 
//做连接

class TodoList extends Component {

  // constructor( props) {
  //   super(props)
  //   this.state = store.getState();
  // }
  render() {
    return (
      <div>
        <div>
          <input  value={this.props.inputValue} onChange={this.props.changeInputValue}/>
          <button onClick={this.handleClick.bind(this)}>提交</button>
        </div>
        <ul>
          <li>Dell</li>
        </ul>
      </div>
    )
  }
  handleClick() {

  }
}
// 做连接的规则
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}
 // store.dispatch,  props
const mapDispatchToProps = ( dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);