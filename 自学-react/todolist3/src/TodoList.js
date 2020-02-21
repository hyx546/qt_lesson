import React, { Component} from 'react';
import {  connect} from 'react-redux'; 
//做连接

class TodoList extends Component {

  // constructor( props) {
  //   super(props)
  //   this.state = store.getState();
  // }
  render() {
    const { inputValue,changeInputValue,handleClick,handleDelete,list} = this.props
    return (
      <div>
        <div>
          <input  value={inputValue} onChange={changeInputValue}/>
          <button onClick={handleClick}>提交</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return <li key={index} onClick={handleDelete}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
// 做连接的规则
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
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
    
    },
    handleClick() {
      const action = {
        type: 'add_item'
      }
      dispatch(action)
    },
    handleDelete() {
      const action = {
        type: 'delete_item',
      }
      dispatch(action)
      
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);