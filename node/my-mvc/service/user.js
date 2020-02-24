const delay = (data, tick) => new Promise(resolve => {
  setTimeout(() => {
    resolve(data)
  }, tick)
})

module.exports = {
  // 异步
  getName() {
    return delay('jerry', 1000)
  },
  // 同步
  getAge() {
    return 20
  }
}