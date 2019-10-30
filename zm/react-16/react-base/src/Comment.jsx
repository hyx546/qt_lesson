import React, {Component} from 'react';

class Input extends Component {
  state = {
    value: ''
  }
  // 箭头函数 this
  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      value
    })

  }
  //  单向数据流
  //  input 受控组件 完全受 state.value 的控制
  handleSubmit = () => {
    const { value } = this.state;
    const { onReceive} = this.props;
    // 回调 函数
    onReceive(value);
    console.log(value)
  }
  render() {
    const {value} = this.state;
    return (
      
       <>
        <input type="text" value={value} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>submit</button>
      </>
    )
    
  }
}
class CommontList extends Component {

  render() {
    const { clist } = this.props;
    return (
      <React.Fragment>
        {
          clist.map((list,index) => {
            return(
              <li key={index}>
                { list.content}
              </li>
            )
          })
        }
      </React.Fragment>
    )
  }
}
class Comment extends Component {
  state = {
    clist: [
      {content: '廖玉良狗东西'}
    ] //评论列表
  }
  handleReceiveComment = (value) => {
    console.log('父组件value', value);
    // 不可变数据
    // this.state.clist.push({ content })
    let clist = this.state.clist.slice(0);
    clist.push()
    this.setState({

    })
  }
  render() {
    const { clist } = this.state
    return (
      <>
    <Input onReceive = {this.handleReceiveComment}/>
    <CommontList clist = {clist}/>
    </>
    )
    
  }
}
export default Comment;