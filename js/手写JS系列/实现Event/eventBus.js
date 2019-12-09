// 发布订阅模式
  // 源码有一个构造函数，放了一个属性拿来缓存需要发布的事件，用到的是Map数据结构来存储数据，
  // 有一个方法是往Map数据中拿数据get()方法，set()用来储存数据


class EventEmitter {
  constructor () {
    this.events = this.events || new Map()
  }
  addEventListener (type, fn) { //监听事件
    if (!this.events.get(type)) {
      this.events.set(type,fn)
    }
  }

  emit (type) { //触发事件
    let handle = this.events.get(type);
    handle.apply(this,[...arguments].slice(1));


  }
}

let emitter = new EventEmitter()
emitter.addEventListener('ages',age => {
  console.log(age);
})

emitter.emit('ages',18)


