import {request} from 'network/request';

export function getPrimaryData() {
  return request({
    url: '/vertical2?tag=430'
  })
}
export function getPrimaryElseCourse() {
  return request({
    url: '/content/course?tag=430&rank=1584415994'
  })
}

export function getPrimaryElseCourse2() {
  return request({
    url: '/content/course?tag=430&rank=1583467991'
  })
}

// 语文
export function getPrimaryChineseData() {
  return request({
    url: '/vertical2?tag=996'
  })
}
//数学
export function getPrimaryMathData() {
  return request({
    url: '/vertical2?tag=998'
  })
}
// 英语
export function getPrimaryEnglishData() {
  return request({
    url: '/vertical2?tag=1044'
  })
}
// 少儿编程
export function getPrimaryChildProgramData() {
  return request({
    url: '/vertical2?tag=1528'
  })
}
// 少儿编程更多
export function getPrimaryChildProgramElseCourse() {
  return request({
    url: '/content/course?tag=1528&rank=1577787555'
  })
}

// 少儿美术
export function getPrimaryChildArtData() {
  return request({
    url: '/vertical2?tag=2084'
  })
}

// 少儿围棋
export function getPrimaryChildChessData() {
  return request({
    url: '/vertical2?tag=2546'
  })
}

// 家长频道
export function getPrimaryParentsChannelData() {
  return request({
    url: '/vertical2?tag=1928'
  })
}