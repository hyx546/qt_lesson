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
var addTwoNumbers = function(l1, l2) {
  let temp = new ListNode('head');
  let l3 = temp,count=0,sum;
  while(l1 || l2 ) {
      const n1 = l1 ? l1.val : 0;
      const n2 = l2 ? l2.val : 0;
      sum = n1+n2+count;
      count=parseInt(sum/10);
      l3.next = new ListNode(sum%10);
      l3 = l3.next;
      if(l1) l1 = l1.next;
      if(l2) l2 = l2.next;
  }
  if (count > 0) l3.next = new ListNode(count);
  return temp.next;
};