// //[]匹配的范围  一个字符
// // let phoneReg=/^1[3-9][0-9]{9}$/;
// // console.log(phoneReg.test("13888888888"));
// let phoneReg=/(1[3-9][0-9])[0-9]{8}/;
// let str="我的号码是13888888888，收下吧";
// // 得到手机号，判断服务商
// console.log(str.match(phoneReg));


// 754211506@qq.com
let emailReg= /^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[0-9a-zA-Z]+$/;
console.log(emailReg.test('754211506@qq.com'));