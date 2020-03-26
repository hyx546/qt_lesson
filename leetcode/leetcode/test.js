/**
 * @param {string} s
 * @{number}
 */
var test = function(data,sum){
  switch (data) {
    case 'IV': sum -= 2;break;
    case 'IX': sum -= 2;break;
    case 'XL': sum -= 20;break;
    case 'XC': sum -= 20;break;
    case 'CD': sum -= 200;break;
    case 'CM': sum -= 200;break;
    default:  break;
  }
  return sum
}

var romanToInt = function(s) {
  var s = s.split("");
  var sum = 0;
  var count = 0;
  for(let i = 0; i<s.length;i++){
    var preString = s[i-1]? s[i-1]:0;
    switch (s[i]) {
      case "I": sum += 1;
        break;
      case "V": sum += 5;
        break;
      case "X": sum += 10;
        break;
      case "L": sum += 50;
        break;
      case "C": sum += 100;
        break;
      case "D": sum += 500;
        break;
      case "M": sum += 1000;
        break;
      default:
        break;
    }
    sum = test(preString+s[i],sum)
  }
  return sum
};