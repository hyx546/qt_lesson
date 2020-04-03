const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');
const router = require('koa-router')();
const app = new Koa();

let count = 10000
app.use(serve(__dirname));
router.get('/transfer', async (ctx) => {
  const login = ctx.cookies.get('login')
  if (login) {
    count -= 100
    ctx.body = {
    code: 0
  };
  }
  
})
router.get('/count', async (ctx) => {
  ctx.body = count;
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8080, () => {
  console.log('server is running 8080');
});