/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let newNums = nums1.concat(nums2);
  newNums = newNums.sort(function(a,b) {
      return a-b;
  })
  let num = newNums.length/2;
  if(parseInt(num) === num ){
      let n1=parseInt(num);
      let n2=parseInt(num)-1;
      return (newNums[n1]+newNums[n2])/2;
  }
  else{
      return newNums[parseInt(num)];
  }
};
findMedianSortedArrays([1,3],[2])