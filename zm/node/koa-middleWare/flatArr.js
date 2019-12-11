//  [1, [2,[3,4]]]
//  [1,2,3,4]


function flat() {
  let res = [];
  for(let i =0; i< arr.length; i++) {
    if (Array.isArray(arr[i])) {//判断是否是数组
      res.concat(flat(arr))
      // [2,3,4]
    }
    else{
      res.push(arr[i]);
    }
  }
  return res;
}