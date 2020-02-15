/**
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder = [3,9,20,15,7] 前序遍历 root left right
 * @param {number[]} inorder  = [9,3,15,20,7] 中序遍历 left root right
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;//如果没有了，则表示没有子节点了
  let rootVal = preorder[0]; //中序第一个就是根结点
  let root = new TreeNode(rootVal); 
  let i = inorder.findIndex(e => e ===rootVal);//在中序遍历中找到根节点的位置并返回给i
  root.left = buildTree(preorder.slice(1,i+1), inorder.slice(0,i)) 
  root.right = buildTree(preorder.slice(i+1),inorder.slice(i+1))
  return root;
};