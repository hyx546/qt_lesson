/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let pos = nums.indexOf(target);
  if(pos != -1) return pos;
  nums.push(target);
  console.log(nums);
  
  // let arr = nums.sort(function(a,b) {
  //   return a-b;
  // })
  // return arr.indexOf(target);
};
searchInsert([1,3,5,6],2)