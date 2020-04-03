import "reflect-metadata";
import Koa = require('koa')
import { useControllers } from 'koa-controllers';

const app = new Koa()
useControllers(app, __dirname + '/controllers/*.ts', {
  multipart: {
    dest: './uploads'
  }
}) //__dirname 绝对路径   / 当前路径下的所有.ts文件


app.listen(3001)
