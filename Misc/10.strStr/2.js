/*
Extremely slow but withot substring
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let needle_len = needle.length
  let haystack_len = haystack.length
  if (needle == '') {
    return 0
  }
  if (needle_len > 50000 || haystack_len > 50000) {
    return -1
  }
  if (needle_len > haystack_len) {
    return -1
  }
  let count = 0
  outer_loop: for (let i = 0; i < haystack_len; i++) {
    if (haystack[i] == needle[0]) {
      for (let j = 0; j + i < haystack_len && j < needle_len; j++) {
        c = j
        if (haystack[j + i] != needle[j]) {
          continue outer_loop
        }
      }
      if (c + 1 == needle_len) {
        return i
      }
    }
  }
  return -1
}
// Test
let haystack = 'mississippi'
let needle = 'issipi'

let ans = strStr(haystack, needle)
console.log(ans)
