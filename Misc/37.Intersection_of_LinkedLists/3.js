/*
Algo: 

a) Make two lists of same length, adding list_b in front of list_a and vice versa
b) now keep doing next on each until either they r not equal or not null

The code below do a) in a very smart way, it only add list_b to list_a only when needed

Convince Urself that this code won't work:

var getIntersectionNode = function(headA, headB) {
    var a = headA
    a.next = headB
    
    var b = headB
    b.next = headA
    while(a!==b)
{
    a =a.next
    b =b.next
           
}
    return b
};

*/ 


/*
Runtime: 88 ms, faster than 90.86% of JavaScript online submissions for Intersection of Two Linked Lists.
Memory Usage: 45.1 MB, less than 97.01% of JavaScript online submissions for Intersection of Two Linked Lists.
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
var getIntersectionNode = function(headA, headB) {
    var a = headA
    var b = headB
    while(a!==b)
{
    a = !a ? headB : a.next
    b = !b ? headA : b.next
           
}
    return b
};
