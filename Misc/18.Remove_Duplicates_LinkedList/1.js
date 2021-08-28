
/*
NOTE:

Below code is inefficient as it is coded to work for both sorted and unsorted lists
For specifically sorted lists see 2.js
*/

/*
Runtime: 88 ms, faster than 51.44% of JavaScript online submissions for Remove Duplicates from Sorted List.
Memory Usage: 41.4 MB, less than 6.19% of JavaScript online submissions for Remove Duplicates from Sorted List.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let map = {}
  let node = new ListNode()
  let ref = node
  while (head) {
    if (map.hasOwnProperty(head.val)) {
      head = head.next
      continue
    }
    ref.next = { val: head.val, next: null }
    ref = ref.next
    map[head.val] = 1
    head = head.next
  }
  return node.next
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
let n1 = {
  val: 1,
  next: {
    val: 1,
    next: { val: 2, next: { val: 3, next: { val: 3, next: null } } },
  },
}

let n2 = { val: 1, next: null }
let n3 = { val: 1, next: { val: 1, next: { val: 2, next: null } } }

deleteDuplicates(n3)
