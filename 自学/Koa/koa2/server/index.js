const Koa = require('koa')
const logger = require('koa-logger')
const app = new Koa()

const mid1 = async(ctx,next) => {
  ctx.body = 'hi'
  await next()
  ctx.body = ctx.body + ' There '
}
const mid2 = async(ctx,next) => {

  ctx.type = 'text/html; charset=utf-8'
  await next()
}
const mid3 = async(ctx,next) => {
  ctx.body = ctx.body + `<h1>hello</h1>`
  await next()
}

function pure (x) {
  return x + 1
}
console.log(pure(1));
console.log(pure(1));
console.log(pure(1));
console.log(pure(1));

app.use(logger())
app.use(mid1)
app.use(mid2)
app.use(mid3)
app.listen(3000)