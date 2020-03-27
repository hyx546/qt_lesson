import axios from 'axios';

export function request(config, success, failure) {
  // 创建axios的实例
  const instance = axios.create({
    baseURL: '',
    timeout: 5000
  })
  // 发送真正的网络请求
  instance(config).then(res => {
    // console.log(res)
    success(res)
  }).catch(err => {
    // console.log(err)
    failure(err)
  })
}
