/*
Implement strStr().
Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/

/*
Algo:

loop until you find first element of needle
    start another loop if first element matched
    this loop see if further elements are also presents or not

You could use subString to avoid inner loop
*/

/*
Runtime: 138 ms, faster than 35.40% of JavaScript online submissions for Implement strStr().
Memory Usage: 40.3 MB, less than 50.48% of JavaScript online submissions for Implement strStr().
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle == '') {
    return 0
  }
  if (needle.length > 50000 || haystack.length > 50000) {
    return -1
  }
  if (needle.length > haystack.length) {
    return -1
  }
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle[0]) {
      if (haystack.substring(i, i + needle.length) == needle) {
        return i
      }
    }
  }
  return -1
}


// Test
let haystack = 'hello'
let needle = ''

let ans = strStr(haystack, needle)
console.log(ans)
