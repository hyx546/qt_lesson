/**
 * 这是 action 的构建函数
 */

 const sendAction = () => {
  //  我们需要返回一个action对象
  return {
    type: 'send_type',
    value: '我是i 个 action'
  }
 }

 module.exports ={
  sendAction
 }