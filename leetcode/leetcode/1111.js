/**
 * @param {string} seq
 * @return {number[]}
 */

let maxDepthAfterSplit = (seq,dep=0)=>{
  // dep++ 是先运算后加，
  return seq.split('').map(e=> e==='(' ? dep++ %2 : --dep%2)
}

