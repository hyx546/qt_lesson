console.log('begin')
const CACHE_NAME = 'PWA-v1.0'
this.addEventListener('install', (event) => {
  //  cacheStorage 缓存内容
  // install -> active
  // Promise resolve
  event.waitUntil()
    caches.open(CACHE_NAME).then(cache => {
      cache.addAll([
        '/bundle.js',
        '/dashen.jpeg'
      ])
    })
})
// 监听浏览器 
this.addEventListener('fetch', (event) => {
  event.waitUntil(
    event.respondWith(
      caches.match(event.request).then(res => {
      if (res) {
        return res;
      }
    }))
  )
})