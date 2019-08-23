// 普世
const curry = require('./b.js');
function checkByRegExp(reg,string){
    return reg.test(string);
}
let checkCellphone =  curry(checkByRegExp)(/^1[3-9]\d{9}$/);
console.log(checkCellphone('13723234567'));
let checkEmail = curry(checkByRegExp)(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/);
console.log(checkEmail('123@qq.com'));



console.log(checkByRegExp(/^1[3-9]\d{9}$/,'18623452345'));
// .com.cn
//  * 0到多次     + 1到多次   
console.log(checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,'1179612384@qq.com'));

checkByRegExp(/^1[3-9]\d{9}$/,'18623452345');
checkByRegExp(/^1[3-9]\d{9}$/,'13312341234');
checkByRegExp(/^1[3-9]\d{9}$/,'13643451212');
checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,'test@qq.com');
checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,'test@163.com');
checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,'test@163.com');