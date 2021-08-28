const util = require('util')
var mergeTwoLists = function (l1, l2) {
  var mergedHead = { val: -1, next: null }

  // objects in JS are assigned by reference
  // hence crt is just new name of mergedHead
  var crt = mergedHead

  console.log("mergedHead pre while", util.inspect(mergedHead, false, null, true))
  console.log("crt pre while", util.inspect(crt, false, null, true))
  console.log("l1 pre while", util.inspect(l1, false, null, true))
  console.log("l2 pre while", util.inspect(l2, false, null, true))

  while (l1 && l2) {
    if (l1.val > l2.val) {
      crt.next = l2
      l2 = l2.next

      console.log("mergedHead if", util.inspect(mergedHead, false, null, true))
      console.log("crt if", util.inspect(crt, false, null, true))
      console.log("l1 if", util.inspect(l1, false, null, true))
      console.log("l2 if", util.inspect(l2, false, null, true))


    } else {
      crt.next = l1
      l1 = l1.next

      console.log("mergedHead else", util.inspect(mergedHead, false, null, true))
      console.log("crt else", util.inspect(crt, false, null, true))
      console.log("l1 else", util.inspect(l1, false, null, true))
      console.log("l2 else", util.inspect(l2, false, null, true))
    }
    crt = crt.next

    console.log("mergedHead while end", util.inspect(mergedHead, false, null, true))
    console.log("crt while end", util.inspect(crt, false, null, true))
    console.log("l1 while end", util.inspect(l1, false, null, true))
    console.log("l2 while end", util.inspect(l2, false, null, true))
  }

  console.log("mergedHead exit while", util.inspect(mergedHead, false, null, true))
  console.log("crt exit while", util.inspect(crt, false, null, true))
  console.log("l1 exit while", util.inspect(l1, false, null, true))
  console.log("l2 exit while", util.inspect(l2, false, null, true))
  crt.next = l1 || l2

  console.log("mergedHead pre return", util.inspect(mergedHead, false, null, true))
  console.log("crt pre return", util.inspect(crt, false, null, true))
  console.log("l1 pre return", util.inspect(l1, false, null, true))
  console.log("l2 pre return", util.inspect(l2, false, null, true))
  return mergedHead.next
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

// let n1 = new ListNode(1, new ListNode(2, new ListNode(9, null)))
// let n2 = new ListNode(4, new ListNode(5, new ListNode(6, null)))
let n1 = { val: 1, next: { val: 9, next: null } }
let n2 = { val: 3, next: { val: 4, next: null } }

let s = mergeTwoLists(n1, n2)
// console.log(s)

// while (s.next != null) {
//   console.log(s.val)
//   s = s.next
// }
// console.log(s.val)
