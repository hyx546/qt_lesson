/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  if(nums.length<1 || nums.length>50000) return '';
  let nums = nums.filter(n => (n >= -5000 && n <= 50000))
  return nums.sort(function(a,b) {
    return a-b;
  })
};
