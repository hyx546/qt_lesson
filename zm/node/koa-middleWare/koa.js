// const Koa = require('koa');
const Koa = require('./Mykoa')
const app = new Koa();

app.use(async (ctx,next) => {
  console.log(1);
  await next();
  console.log(2);
})

app.use(async (ctx,next) => {
  console.log(3);
  await next();
  console.log(4);
})
app.use(async (ctx,next) => {
  console.log(5);
})

// app.run();
const http = require('http');
http.createServer((req,res) => {
  // 请求
  app.run();
})

// app.listen(3000, () => {
//   console.log('3000');
// })