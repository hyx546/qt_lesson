import {request} from 'network/request';

// 六年级
export function getGradeSixData() {
  return request({
    url: '/vertical2?tag=1072'
  })
}
export function getGradeSixElseCourse() {
  return request({
    url: '/content/course?tag=1072&rank=1581149383'
  })
}

export function getGradeSixChineseData() {
  return request({
    url: '/vertical2?tag=1446'
  })
}
export function getGradeSixMathData() {
  return request({
    url: '/vertical2?tag=1448'
  })
}
export function getGradeSixEnglishData() {
  return request({
    url: '/vertical2?tag=1450'
  })
}
export function getGradeSixNewJuniorData() {
  return request({
    url: '/vertical2?tag=1874'
  })
}