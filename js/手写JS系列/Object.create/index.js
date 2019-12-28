// var a = {
//   name: 'wn',
//   age: 18
// } 
// var b = Object.create(a);
// var c = a

// console.log(b.__proto__,c);



function create(obj) {
  function F() {}
    F.prototype = obj
    return new F()
}



if (typeof Object.create !== 'function') {
    Object.create = function (prototype,properties){}
    function Ctor() {}
    Ctor.prototype = properties
    var o =new Ctor()
    if (prototypr) {
      o.constructor = Ctor
    }
    if (properties !== undefined) {
      if (properties !== Object(properties)) {
        throw Error()
      }
      Object.defineProperties(o,properties)
    }
    return o
}
