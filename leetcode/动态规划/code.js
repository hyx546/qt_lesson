let arr = [13, 1, 2,5,3,8,11,7]
let sum =18


function findSum(arr,sum) {
  // for (let i = 0; i < arr.length; i++) { //o(n^2)
  //   // arr[i]
  //   for (let j = i + 1; j < arr.length; j++){
  //     if (arr[i] +arr[j] === sum) {
  //       console.log(i, j,arr[i],arr[j])
  //     }
  //   }
    
  // }

  let obj ={}
  arr.forEach((v,i) => {// o(n)
    console.log(v,i)
    if (String(v) in obj) {
      console.log('找到了 ',obj[v],i)
    }
    obj[sum-v] = i
  });
  console.log(obj)
}
findSum(arr,sum)