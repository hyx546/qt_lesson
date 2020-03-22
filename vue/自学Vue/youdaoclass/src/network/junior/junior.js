import {request} from 'network/request.js';

export function getJuniorData() {
  return request({
    url: '/vertical2?tag=432'
  })
}


export function getJuniorElseData() {
  return request({
    url: '/content/course?tag=432&rank=1584455554'
  })
}

export function getJuniorElseData2() {
  return request({
    url: '/content/course?tag=432&rank=1583927817'
  })
}