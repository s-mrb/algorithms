/*
Algo:
- use regex to remove everything which is non alphanumeric+ underscore, don't use /W/g for
 _ won't be removed as it is part of alphanumeric for some reason
- use /[^A-Za-z0-9]/g
- use two pointers head and tail
- see if element at tail is same as that of head
- increment head and decrement tail
- finish loop when head >= tail

NOTE: first lowering the case and then using regex speeds up regex part
*/

/*
Runtime: 84 ms, faster than 82.37% of JavaScript online submissions for Valid Palindrome.
Memory Usage: 40.9 MB, less than 80.59% of JavaScript online submissions for Valid Palindrome.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    var parsed_str = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '')
    var tail = parsed_str.length - 1
    var head = 0
    while(head <= tail){
      if (parsed_str[head++] != parsed_str[tail--]) {
        return false
      }
    }
    return true
  }

console.log(isPalindrome('ab_a'))
