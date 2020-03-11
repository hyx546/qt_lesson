import Vue from 'vue'
import App from './App'
import axios from 'axios';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// 1.axios的基本使用
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   //专门针对get请求的参数拼接
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res.data)
// })

// 2.axios发送并发请求
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
// }),axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })]).then(axios.spread((res1,res2) => {
//   console.log(res1)
//   console.log(res2)
// }))


// 创建对应的axios的实例
// const instance1 = axios.create({
//   baseURL: '',
//   timeout: 5000
// })

// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res)
// })
// instance1({
//   url: '/home/multidata',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })


// 5. 封装request模块
import {request} from './network/request'

request({
  url: ''
},res => {
  console.log(res)
})
