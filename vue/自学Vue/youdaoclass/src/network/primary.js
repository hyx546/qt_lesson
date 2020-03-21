import {request} from './request';

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