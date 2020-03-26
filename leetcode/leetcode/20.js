/**
 * @param {string} s
 * @return {boolean}
 */
var map ={
  '(':')',')':'(',
  '{': '}','}':'{',
  '[':']',']':'['
}
var isValid = function(s) {
  var arr =[];
  for(let i =0 ;i<s.length;i++) {
    if(map[s[i]] === (arr[arr.length-1])){
      arr.pop();
    }
    else{
        arr.push(s[i])
    }
  }
  if(arr.length !== 0) return false;
  return true
};