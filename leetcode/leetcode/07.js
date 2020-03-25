/**
 * @param {number} x
 * @return {number}
 */

var overflow = function(x) {
    if(x>=(-(Math.pow(2,31))) && x<=((Math.pow(2,31))-1)) return x;
    else return 0;
}

var reverse = function(x) {
    if(Math.abs(overflow(x)) > 0){
        if(x>=0){
            var x = x+""; // 先把x化为 字符串
            x=x.split(""); // 再把x转为数组
            x=x.reverse(); // 再将数组通过reverse进行翻转
            x=parseInt(x.join("")); // 再通过join把数组转化为字符串
            console.log(overflow(x));           
        }
        else{
            x=-x;
            var x = x+"";
            x=x.split("");
            x=x.reverse();
            x=x.join("");
            // return -x
            console.log(overflow(-x));
            
        }
    }
    else{
        return 0;
    }
};
reverse(123)
