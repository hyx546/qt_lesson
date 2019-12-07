module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /(.js|.jsx)$/,
        use: ['babel-loader'],//降级为浏览器可以识别的代码
        exclude: /node_modules/
      }
    ]
  }
}