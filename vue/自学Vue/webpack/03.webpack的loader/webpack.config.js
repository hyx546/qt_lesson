const path = require('path');

module.exports={
  entry: './src/main.js', //入口
  output: {
    //path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径。
    path: path.resolve(__dirname,'dist'), //动态获取绝对路径
    filename: 'bundle.js'
  }, //出口
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader只负责将css文件进行加载
        use: [ 'style-loader', 'css-loader']
      }
    ]
  }
}