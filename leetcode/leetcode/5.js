/**
 * @param {string} s
 * @return {string}
 */
var isPalindrome = function(s) {
  for(let i=0;i<s.length;i++) {
      if(s[i] !== s[s.length-i-1]){
          return false;
      }
  }
  return true;
}

var longestPalindrome = function(s) {
  if(s.length>1000) return '';
  if (s.length < 2 || !s )  return s;
  let max= '';
  let cur='';
  for(let i =0 ; i<s.length;i++) {
      for(let j=i+1;j<=s.length;j++){
          cur = s.substring(i,j);
          if(isPalindrome(cur) && cur.length > max.length) max = cur;
      }
  }
  return max;
};