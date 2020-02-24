// 抛出一个对象
module.exports = {
  index: async ctx => {
    ctx.body = 'Ctrl Index'
  },
  detail: ctx => {
    ctx.body = 'Ctrl Detail'
  }
}


// 抛出一个函数
// module.exports = app => ({
//   'get /': app.$ctrl.home.index,
//   'get /detail': app.$ctrl.home.detail
// })