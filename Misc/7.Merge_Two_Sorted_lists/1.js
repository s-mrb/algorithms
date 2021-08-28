/*
Extremely Important for understanding References in JS
*/

/*
Runtime: 80 ms, faster than 82.56% of JavaScript online submissions for Merge Two Sorted Lists.
Memory Usage: 39.7 MB, less than 98.98% of JavaScript online submissions for Merge Two Sorted Lists.
*/

const util = require('util')
var mergeTwoLists = function (l1, l2) {
  let merged = { val: null, next: null }
  let crt = merged

  while (l1 && l2) {
    if (l1.val > l2.val) {
      crt.next = l2
      l2 = l2.next
    } else {
      crt.next = l1
      l1 = l1.next
    }

    // nth element in merged added
    // now to add n+1th, move pointer to next object
    // so that val of next obj becomes value of crt
    // and in next loop correct n+1th object can be added
    crt = crt.next
  }
  crt.next = l1 || l2

  //   console.log(util.inspect(merged, false, null, true))
  return crt.next
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

let n1 = { val: 1, next: { val: 9, next: null } }
let n2 = { val: 3, next: { val: 4, next: null } }

let s = mergeTwoLists(n1, n2)
