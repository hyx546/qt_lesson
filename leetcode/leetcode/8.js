/**
 * 字符串转换整数
 * @param {string} str
 * @return {number}
 */
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const number = parseInt(str, 10);
  console.log(number);
  if(isNaN(number)) {
      return 0;
  } else if (number < Math.pow(-2, 31) || number > Math.pow(2, 31) - 1) {
      return number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
  } else {
      return number;
  }
};
myAtoi("-98 fsfs")


