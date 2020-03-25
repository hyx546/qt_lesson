/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  var y = x;
  x = x + "";
  x=x.split("");
  x=x.reverse();
  x=parseInt(x.join(""));

  console.log(y === x)
 };
 
isPalindrome(121)