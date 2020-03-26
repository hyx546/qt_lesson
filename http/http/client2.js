const http = require('http')
const fs = require('fs')

//   客户端

// http.ClientRequest 类
//  new http.ClientRequest()
// http.request

// 创建一个客户端  （能发http请求） 的对象
// get http://127.0.0.1:80/ http/1.1
const client = http.request({
  // tcp
  host: '127.0.0.1',
  port: 80,
  // http
  protocol:'http:',
  method: 'GET',
  // path: '/'
  path: '/view'
},(res) => {
  res.on('data',(data) => {
    console.log(data.toString());
    
  })
})

//  请求的发送需要调用下面的方法
client.write('')
client.end()