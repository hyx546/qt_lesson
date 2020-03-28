/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    var list = head;
    while(list != null  && list.next != null){
        if(list.val == list.next.val){
            list.next = list.next.next
        }
        else{
            list = list.next
        }
    }
    return head;
};