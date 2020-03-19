import {request} from './request';

export function getPrimaryData() {
  return request({
    url: '/vertical2?tag=430'
  })
}