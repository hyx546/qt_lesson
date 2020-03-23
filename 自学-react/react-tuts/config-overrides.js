/**
 * @file config-overrides.js
 * 基于customize和react-app-rewired的定制化配置文件
 */

//  从customize引入一些相关的方法
const { 
  override,
  addLessLoader,
  fixBabelImports,
  addDecoratorsLegacy

} = require('customize-cra')

const modifyVars = require('./lessVars')

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars
  }),
  addDecoratorsLegacy(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
)