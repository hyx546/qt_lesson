let arr = ['a','b','c','d','e','f','g','h']

// function RShift(list,k) {
//   const copy = [...list]
//   const n = copy.length


//   if(k % n === 0 ) return list

//   let cnt = Math.abs(k>0? k % n : n+(k%n))
//   let t =null;

//   while (cnt--) {
//     t = list[n - 1]
//     // 右移一位
//     for(let i =n-1 ;i > 0;i--){
//       list[i] = list[i-1];
//     }
//     list[0] = t;
//   }
//   return list;
// }
// function RShift (list, k ){
//   const n =list.length
//   let i = Math.abs(k>0? k % n : n+(k%n))
//   return list.concat([...list]).slice(n-i,n*2-i)
// }
function reverse(list,start,end){
  let t =null;
  while (start < end) {
    t = list[start];
    list[start] = list [end];
    list[end] = t;
    start ++;
    end--;
  }
}


function RShift (list, k ) {
  const n =list.length
  let i = Math.abs(k>0? k % n : n+(k%n))
  if(k%n === 0) return list
    reverse(list,0,n-k-1)
    reverse(list,n-k,n-1)
    reverse(list,0,n-1)
    return list
}

console.log(RShift(arr,2));