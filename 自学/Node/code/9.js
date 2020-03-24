/**
 * 文件操作案例 （初始化目录结构）
 */
const path = require('path');
const fs = require('fs');

let root = '/Users/xiaokeai/Desktop'
let fileContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div>welcome to  this</div>
</body>
</html>
`;

// 初始化数据
let initData = {
  projectName = 'mydemo',
  data: [{
    name: 'img',
    type: 'dir'
  },
  {
    name: 'css',
    type: 'dir'
  },
  {
    name: 'js',
    type: 'dir'
  },
  {
    name: 'index.html',
    type: 'dir'
  }]
}
// 创建项目根路径
fs.mkdir(path.join(root,initData.projectName),(err => {
  if(err) return;
  // 创建子目录和文件
  initData.data.forEach((item) => {
    if(item.type === 'dir'){
      // 创建子目录
      fs.mkdirSync(path.join(root,initData.projectName,item.name));
    }else if(item.type === 'file') {
      //  创建文件，并写入内容
      fs.writeFileSync(path.join(root,initData.projectName,item.name),fileContent)
      
    }
  })
}))
