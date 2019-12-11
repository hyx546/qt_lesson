
class Koa {
  constructor() {
    this.middleWare = [];
  }
  use(fn) {//加载一个中间件进来
    this.middleWare.push(fn);
  }
  run() {
    // application compose: 中间件
  
    const dispatch= (i) => {
      let fn = this.middleWare[i];
      if (!fn) return Promise.resolve();
      // app.use(async (ctx,next) => {
      //   console.log(1);
      //   await next();
      //   console.log(2);
      // })
      // fn use 进来函数
      // fn({ctx: 'ctx'}, () => {
        //  next
        // dispatch(i+1);
      // })
      //  剩余的
      // 2
      return Promise.resolve(fn({ ctx: 'ctx'},() => {
        // next
        return dispatch(i+1);
      }))
    } 
    dispatch(0);
  }
}
// es-module js
// export default Koa;

// node commonjs
module.exports = Koa;