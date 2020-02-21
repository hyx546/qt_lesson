import React, {Component} from 'react';
import 'antd/dist/antd.css'
import store from './store/index';
import {getInputChangeAction, getAddItemAction,getDeleteItemAction,getInitList} from './store/actionCreators'
import TodoListUI from './TodoListUI'
// import axios from 'axios';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange); // store里面的数据是要改变，subscribe里面的函数就能自动执行
  }
  render() {
    return (
    <TodoListUI 
      inputValue = { this.state.inputValue}
      list = {this.state.list}
      handleInputChange = {this.handleInputChange}
      handleBtnClick = {this.handleBtnClick}
      handleItemDelete = {this.handleItemDelete}
      
    ></TodoListUI>)
  }
  componentDidMount() {
    const action = getInitList();
    store.dispatch(action)
  //  const action = getTodoList() //使用thunk了，此时action就是函数，否则action只能为一个对象
  // axios.get('/list.json').then((res) => {
  //   const data = res.data;
  //   const action = initListAction(data)
  //   // dispatch(action)
  //   // store.dispatch(action);
  
  // })
}
  
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState());

  }
  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }
  handleItemDelete(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}
export default TodoList