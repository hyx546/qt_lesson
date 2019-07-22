// Math.max()
const IMath ={}//命名空间
/*
* @params:number 返回的必须是整数，否则NaN -->Not a number
* @return:Number 返回最大值
*/

IMath.max = function(...args){
    // console.log(arguments,arguments.length);
    for(var i=0;i<arguments.length;i++){
        //类型检测
        if(typeof args[i] !== 'number'){
            return NaN;
        }

    }
}

console.log();