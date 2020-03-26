/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length === 0) return "";
  var str = strs[0];
  for(let i = 1 ;i<strs.length;i++){
    let j = 0;
    for (j; j< str.length && j<strs[i].length; j++) {
      if(str.charAt(j) != strs[i].charAt(j)){
        break;
      }
    }
    str = str.substring(0,j);
    if (str.length === 0) {
      return "";
    }
  }
  // return str;
  console.log(str);
};

longestCommonPrefix(["flower","flow","flight"])