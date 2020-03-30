/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
// var lastRemaining = function(n, m) {
//   let arr = [],i=0;
//   while(i<n){
//     arr.push(i)
//     i++;
//   }
//   let num=0;
//   while(n> 1) {
//     num = (num+m -1)%n;
//     arr.splice(num,1);
//     n--;
//   }
//   console.log(arr);
  
// };
var lastRemaining = function (n, m) {
  let ans = 0;
  for (let i = 2; i <= n; i++) {
    ans = (ans + m) % i;
    console.log(ans);
    
  }
  return ans;
};

lastRemaining(5,3)