const Koa = require('Koa')
const { initRouter,initController,initService } = require('./lm-loader')

class lm {
  constructor (conf) {
    this.$app = new Koa(conf)
    this.$ctrl = initController()
    this.$service = initService()
    this.$router = initRouter(this)
    this.$app.use(this.$router.routes())
  }

  start (port) {
    this.$app.listen(port, () => {
      console.log('服务已经启动成功 端口号：' + port)
    })
  }
}

module.exports =lm