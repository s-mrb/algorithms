/*
Algo: Bruteforce, see 3.js for better solution

while a not null, loop:
    let temp = b
    while temp not null, loop:
        if(a==temp){
            return temp
        }
        temp = temp.next
return null
*/

/*
Runtime: 1617 ms, faster than 5.33% of JavaScript online submissions for Intersection of Two Linked Lists.
Memory Usage: 45.6 MB, less than 59.99% of JavaScript online submissions for Intersection of Two Linked Lists.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  while (headA) {
    let bn = headB
    while (bn) {
      if (bn == headA) {
        return bn
      }
      bn = bn.next
    }
    headA = headA.next
  }
  return null
}
