- 如果我们有好多信息要从用户收集
    表单不要太长 易用
    移动    分页
    pc端， 多个表单 document.forms[]
- JS 在面向对象中
    this 指向谁？
    EditInPlace 类  抽象概念
    let editor = new EditInPlace();//员工
    this 指向的是editor
    this.staticElement = document.creatElement('span')
    this.converToText();//即是函数，又是对象的方法  this指向对象
    this.staticElement.addEventListener('click',function(){
        this=> 对象
        this =>this.staticElement   语法定义
        作为事件来执行  内部的this  指向事件发生的元素
    })
- 函数内部的this是执行时动态决定的，执行的方式来决定的
    this.converToText();    //函数是作为对象的方法被调用    this指向对象

- EditorInPlace     类，constructor + prototype (原型对象 Object)
new EditorInPlace() 对象    new 发生了什么
function    EditorInPlace(){

}函数首字母大写 构造器
EditorInPlace.prototype = {
    converToText:function(){}
        ....
}

- this 用法
- 代码的组织    attachEvents
-  状态的方法
- 原生JS
