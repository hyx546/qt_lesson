/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 function ListNode(val) {
      this.val = val;
      this.next = null;
  }
var mergeTwoLists = function(l1, l2) {
    if (!l1) {
        return l2
    }
    else if (!l2) {
        return l1
    }
    var arr = new ListNode();
    console.log(arr);
    
    while(l1 || l2){
        
    }
};