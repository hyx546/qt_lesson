// function Person(name) {
//   this.name = name
// }
// let p = new Person('wn')
// p.__proto__ == Person.prototype;
// console.log(p.__proto__);
// console.log(Function.__proto__);



// var foo = {},
//     F = function(){};
 
// Object.prototype.a = 'value a';
// Function.prototype.b = 'value b';
 
// console.log(foo.a)    // value a
// console.log(foo.b)    // undefined
// console.log(F.a)      // value a
// console.log(F.b)      // value b

// function Person(name) {
//   this.name = name
//   return {name}

// }
// let p = new Person('wn')

// console.log(p)

// for in 取 key； for of 取 value
// for of 只能用于数组遍历，for in还可以用于对象属性的遍历


// var myArray = [1,2,3,4,5,6,7]

// for( let index in myArray){
//   console.log(index);
// }

// for in 
//  1. index是索引为字符串型数字，不能进行几何运算
//  2. 遍历的顺序有可能不是按照实际数组的内部顺序进行
//  3. 使用for in 会遍历数组所有的可枚举属性，包括原型



//  for of
//  遍历的是数组的元素
//  不包括数组原型和索引


let gArr = [1,[2,3],4,5,[6,7,[3,2,8]]]
let oArr = [1,2,3,4,5,6,7,3,2,8]

// function reduceDimension(arr){
//   let ret = [];
//   let toArr = function(arr){
//       arr.forEach(function(item){
//           item instanceof Array ? toArr(item) : ret.push(item);
//       });
//   }
//   toArr(arr);
//   return ret;
// }

// console.log(reduceDimension(gArr))

// function reduceDimension(arr){
//   let ret = []
//   let toarr= function (arr){
//     arr.forEach(function(item){
//       item instanceof Array ? toarr(item) : ret.push(item);//Array.isArray(item)
//     })
//   }
//   toarr(arr);
//   return ret;
// }
// console.log(reduceDimension(gArr))

function outputArr(arr) {
  return arr.reduce(function(pre, item) {
    return pre.concat(Array.isArray(item)? outputArr(item) : item)
  },[])
}
console.log(outputArr(gArr))
