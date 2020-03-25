/*
    目录操作
    1. 创建目录
    fs.mkdir(path[,mode], callback)
    fs.mkdirSync(path[, mode])

    2. 读取目录
    fs.readdir(path[,options], callback)
    fs.readdirSync(path[,options])

    3. 删除目录
    fs.rmdir(path,callback)
    fs.rmdirSync(path)
 */

 const path = require('path')
 const fs = require('fs')
//  创建目录
//  fs.mkdir(path.join(__dirname,'abc'),(err => {
//    console.log(err)
//  }))

// fs.mkdirSync(path.join(__dirname,'hello'));

// -------------------------------------------
// 读取目录
// fs.readdir(__dirname,(err, files) => {
//   files.forEach((item,index) => {
//     fs.stat(path.join(__dirname,item),(err, stat) => {
//       if (stat.isFile())
//       {console.log(item,'文件');}
//       else if(stat.isDirectory()){
//         console.log(item,'目录');
//       }
//     })
//   })
// })

// 同步，效果一样，但是效率低
// let files = fs.readdirSync(__dirname);
// fs.readdir(__dirname,(err, files) => {
//   files.forEach((item,index) => {
//     fs.stat(path.join(__dirname,item),(err, stat) => {
//       if (stat.isFile())
//       {console.log(item,'文件');}
//       else if(stat.isDirectory()){
//         console.log(item,'目录');
//       }
//     })
//   })
// })

// ----------------------------
// 删除目录
// fs.rmdir(path.join(__dirname,'abc'),(err) => {
//   console.log(err)
// })
fs.rmdirSync(path.join(__dirname,'hello'))