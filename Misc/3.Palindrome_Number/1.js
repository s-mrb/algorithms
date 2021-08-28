/*
Algorithm:
Reverse the given number, and see if both equals
*/


/*
Runtime: 168 ms, faster than 91.18% of JavaScript online submissions for Palindrome Number.
Memory Usage: 48.1 MB, less than 61.06% of JavaScript online submissions for Palindrome Number.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false
  }
  let r = 0
  let copy = x

  while (copy) {
    r = r * 10 + (copy % 10)
    copy = parseInt(copy / 10)
  }
  return r == x
}

console.log(isPalindrome(1234567899))
