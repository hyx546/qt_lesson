import {request} from 'network/request';

export function getPreSchoolData() {
  return request({
    url: '/vertical2?tag=1276'
  })
}

// 少儿美术
export function getPreSchoolChildArtData() {
  return request({
    url: '/vertical2?tag=2370'
  })
}

// 有道乐读
export function getPreSchoolYoudaoReadData() {
  return request({
    url: '/vertical2?tag=2368'
  })
}

// 卡搭编程
export function getPreSchoolCardProgramData() {
  return request({
    url: '/vertical2?tag=2366'
  })
}