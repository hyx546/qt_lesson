/**
 * 这个文件 是 创建reducer函数的，专门用来处理 发送过来的 action
 */

 const initState = {
   value: '默认值'
 }
 const reducer = (state,action) => {
   switch (action.key) {
     case 'send_type':
       return Object.assign({}, state,action)
     default:
       return state;
   }
 }
 module.exports = {
    reducer
 }