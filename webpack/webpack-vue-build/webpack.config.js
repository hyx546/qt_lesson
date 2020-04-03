const path = require('path');
const VueloaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  mode: 'development', // production
  entry: {
    bundle: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['.vue', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, './src/')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueloaderPlugin()
  ]
}