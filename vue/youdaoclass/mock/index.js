import Mock from 'mockjs'
import home from './home/index'
import primary from './primary'
import junior from './junior'

// 延时200-600毫秒请求到数据
Mock.setup({
  timeout: '200-600'
})

const mocks = [
  ...home,
  ...primary,
  ...junior
]

mocks.forEach(route => {
  Mock.mock(route.url, route.type, route.response)
})
