// ess 面向对象
function Person(name){// 女主角 
    // constructor
    // Object{ }
    this.name=name;
}
// 男主角
Person.prototype = {
    getName:function(){
        return this.name;
    },
    playHPjy:function(){
        console.log('今晚吃鸡，大吉大利');
    }
}
// new + function()    新的对象
// 实例     第三者 
let person = new Person('赵小猛');
console.log(person);