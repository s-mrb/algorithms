/*
Algo: Two Pointer strategy,

NOTE: you can't compare values of nodes to see if cycle exists because different nodes can have same vals
- u got to compare entire object
*/


/*
Runtime: 80 ms, faster than 79.27% of JavaScript online submissions for Linked List Cycle.
Memory Usage: 41.5 MB, less than 29.12% of JavaScript online submissions for Linked List Cycle.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var ptr_a = head
    var ptr_b = head
    ptr_b = ptr_b ? ptr_b.next : null
    while(ptr_a && ptr_b){
        if(ptr_a==ptr_b){
            return true
        }
        ptr_a = ptr_a.next
        ptr_b = ptr_b.next ? ptr_b.next.next : null 
    }
    return false
    
};