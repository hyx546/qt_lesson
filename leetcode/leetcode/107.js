/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let arr =[];
  const deep = (node,index) => {
      if(!node) return ;
      arr[index] ? arr[index].push(node.val) : arr[index] = [node.val];
      index++;
      deep(node.left,index);
      deep(node.right,index);
  }
  deep(root,0);
  return arr.reverse();
};