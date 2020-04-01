function makeIterator (arr) {
  let nextIndex = 0;
  //   返回一个迭代器对象
  return {
    next: () => {
      //  next() 方法返回的结果对象
      if(nextIndex < arr.length) {
        return {
          value: arr[nextIndex++],
          done: false
        }
      }
      else {
        return {
          done: true
        }
      }
    }
  }
}

const it = makeIterator(['吃饭','睡觉','打豆豆'])
console.log('首先',it.next().value);
console.log('其次',it.next().value);
console.log('然后',it.next().value);
console.log('最后',it.next().done);
