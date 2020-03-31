/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if(nums.indexOf(target) != -1) return nums.indexOf(target);
  for(let i=0;i<nums.length;i++) {
    if(nums[i] > target) nums.splice(i-1,0,target);
    break;
  }
  return nums.indexOf(target);
};
searchInsert([1,3,5,6],2)