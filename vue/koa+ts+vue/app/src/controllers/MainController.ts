import * as Koa from 'koa';  //* as 把koa中所有文件引入过来
import { Controller, Get, Ctx} from 'koa-controllers'

console.log(1)

//创建类
@Controller //让这个类与路由挂钩
export default class MainController {
  @Get('/')
  public async index(@Ctx ctx: Koa.BaseContext) {
    ctx.body = 'hello'
  }

  @Get('/user')
  public async user(@Ctx ctx: Koa.BaseContext) {
    ctx.body = '用户中心'
  }
}