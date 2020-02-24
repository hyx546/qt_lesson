// const Koa = require('koa')
// const app = new Koa() 两步相当于下面一步
const app = new(require('koa'))()
const { initRouter} = require('./lm-loader')

app.use(initRouter().routes())

app.listen(3000)