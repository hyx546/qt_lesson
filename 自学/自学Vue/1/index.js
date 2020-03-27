const nums = [10, 20, 111, 222, 444, 40, 50]

let total = nums.filter(function(n) {
  return n < 100;}).map(function(n) {
  return n*2;}).reduce(function(preValue,n){
      return preValue + n;
  },0)

console.log(total);