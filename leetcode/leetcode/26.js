/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let map = new Map();
  for(let n of nums) {
      map.set(n,map.has(n)? map.get(n) : 1);
  }
   let arr = Array.prototype.slice.call([...map.keys()])
   console.log(typeof arr);
   console.log(arr.length);
};
removeDuplicates([1,1,2])