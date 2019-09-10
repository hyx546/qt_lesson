- css 处理
  - 某个盒子里的所有子元素占据一页
  - 事件 onscroll 很多次  节流
  - transform   transition
  - 面向对象

- jquery API  $()怎么实现？
  $(fn) 原生js也是有生命周期（vue）的，我们叫她事件  
  js是基于事件的脚本代码语言  找对的生命周期  
  $('.container') querySelector方法
  typeof  参数  function 走分支
  .find()查找 querySelector
  .css(cssname, val) .height()

  VUE 通通没有
  VUE MVVM 尽量的减少DOM编程，  querySelector
  css DOM的查找， 执行  都是要花很多内存的，  VUE可以优化

  VUE 生命周期  js  事件
  .innerHTML css width()
  <template>
    <div :width="width">
      {{content}}
    </div>
  </template>
  可以减少DOM操作

  早点执行
  利用DOM编程