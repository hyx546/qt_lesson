// Create Phone Number
// (123)456-7890
// 编写一个函数,接受一个由10个整数组成的数组
// (123)456-7890   电话号码
// const createPhoneNumber=(arr)=>"("+arr[0]+arr[1]+arr[2]+")"+arr[3]+arr[4]+arr[5]+"-"+arr[6]+arr[7]+arr[8]+arr[9]
const createPhoneNumber=(numbers)=>{
    let format="(xxx)xxx-xxxx";
    // replace
    for(let i=0;i<numbers.length;i++){
        format=format.replace('x',numbers[i]);
    }
    return format;
}
console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));