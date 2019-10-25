const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const serve = require('koa-static');

const app = new Koa();

app.use(bodyParser());
app.use(serve(path.join(__dirname, './static/')));
// 加载模板引擎
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}))
router.get('/', async (ctx) => {
  const query = ctx.query
  const { xss } = query
  ctx.set('X-XSS-Protection',0)
  await ctx.render('xss',{
    xss
  })
})
router.get('/commentall',async (ctx) => {
  await ctx.render('comment')
})
var cache = {}
// RXJS frp
router.get('/comment',async (ctx) => {
  function html_encode (s) {
    var str = ''
    s = s.replace(/</g,'&lt;')
    s = s.replace(/>/g,'&gt;')
    return s
  }
  const { comment } = ctx.query
  cache.v =html_encode(comment)
  ctx.body = {
    code: 123
  }
})
router.get('/getcomment',async function(ctx) {
  ctx.body = {
    comment: cache.v
  }
})
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8080, () => {
  console.log('server is running 8080');
});
