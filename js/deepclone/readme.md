- 为什么所有公司都考这题
    内部有性能优化的考点
- 性能优化
    1. chrome 自带的性能优化工具
        console.warn console.error()
        console.time('for-in') console.timeEnd('for-in')
        顺序执行 瞬间执行
    2. for key in 性能不太好 用for 代替， while最快
- 浅拷贝    返回的对象，并不是独立的新的对象
            跟直观理解有差异
- 浅拷贝    深拷贝  规避内存指向同一地址问题
    返回新对象  JSON.parse(JSON.stringify())

    JSON.parse(JSON.stringify())
    会返回一个对象，复杂的，function() {}, 解决大部分问题

- 递归
    大的问题， 由多个 类似（clone） 问题构成，并且，有一个退出条件，clone 多层JSON嵌套 由内到外的一层层解决一层时，直接返回

