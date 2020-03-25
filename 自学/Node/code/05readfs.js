/**
 * 读文件
 */

const fs = require('fs')
const path = require('path')

let strpath =  path.join(__dirname,'data.txt');

fs.readFile(strpath,(err,data) => {
  if(err) return;
  console.log(data.toString());
});

//  异步操作
//  如果有第二个参数并且是编码，那么回调函数获取到的数据就是字符串
//  如果没有第二个参数，那么得到的就是Buffer实例对象
// fs.readFile(strpath,'utf-8',(err,data) => {
//   if(err) return;
//   console.log(data);
// });

// 同步操作
let ret = fs.readFileSync(strpath)
console.log(ret)
