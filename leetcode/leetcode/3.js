/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if(s.length === 0) return 0;
  let arr =[s[0]];
  let max=1;
  for(let i=0 ;i<s.length;i++) {
    let index =arr.indexOf(s[i])
    if(index >= 0){
      max = arr.length > max? arr.length : max;
      arr.splice(0,index+1);
      arr.push(s[i])
    }
    else{
      arr.push(s[i]);
    }
  }
  return  arr.length > max? arr.length : max;
};
lengthOfLongestSubstring("dvdf")