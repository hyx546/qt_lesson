/**
  路径操作
 */
 const path = require('path');

//  获取路径的最后一部分
// console.log(path.basename('/foo/baz/baz/asdf/quux.html')); // quux.html
// console.log(path.basename('/foo/baz/baz/asdf/quux.html','.html')); // quux

//  获取路径
// console.log(__dirname); // 获取当前路径
// console.log(path.dirname('abc/qqq/www/abc'));

// 获取扩展名称
// console.log(path.extname('index.html'));

// 路径的格式化处理
// path.format() obj -> string
// path.parse() string->obj


// let obj = path.parse(__filename);
// console.log(obj.base);
/**
{
  root: '/', 文件的根路径
  dir: '/lesson/qt_lesson/自学/Node/code', 文件的全路径
  base: '02.js', 文件的名称
  ext: '.js', 扩展名
  name: '02' 文件名称
}
 */

//  let objpath = {
//    root: '/',
//    dir: '/lesson/qt_lesson/自学/Node/code',
//    base: 'abc.txt',
//    ext: '.txt',
//    name: 'abc'
//  }
//  let strpath = path.format(objpath)
//  console.log(strpath);
 
// 判断是否为绝对路径
// console.log(path.isAbsolute('/'));

// 拼接路径(..表示上层路径， .表示当前路径),在连接路径的时候会格式化路径
// console.log(path.join('/foo','bar','baz/asdf','quux', '../../'));


// 规范式路径
// console.log(path.normalize(''));

// 两个特殊属性
// console.log(path.delimiter);
// console.log(path.sep);


