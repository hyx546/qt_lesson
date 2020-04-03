## 一份代码，既可以在客户端，也可以在服务端运行

虚拟
服务端： 生成 html
客户端： 负责事件绑定

SPA: html 事件 在客户端

## JEE ejs
服务端渲染

## node
1. 服务端渲染
2. webpack babel 工具
3. 中间层 （BFF)
    client /buy server
    /num  1
    /login  2
    /bug  3
    解决：
    node: backend for front
    get('/nodeBuy', async() => {
      // 内网请求
      // 速度理论上限
      get('/num') login buy
    })
