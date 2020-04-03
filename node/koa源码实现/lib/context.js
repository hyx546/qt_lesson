let proto = {} 

function defineGetter(pro,name){ //参数分别是代理的对象和对象上的属性
    proto.__defineGetter__(name,function(){ //每个对象都有一个__defineGetter__方法实现代理
        return this[pro][name] //this ===> ctx
    })
}
defineGetter('request','url')
defineGetter('request','path')
module.exports = proto