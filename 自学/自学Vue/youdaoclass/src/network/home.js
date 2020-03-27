import {request} from 'network/request';

export function getHomeData() {
  return request({
    url: '/webhome'
  })
}
export function getHomeListData() {
  return request({
    url: '/webhome/recommendCourse?tagIds=[870,424,410,432,430,414,828,572,458,1542,896,1110,418,1078]'
  })
}