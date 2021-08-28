/*
Algorithm:
-  make dict, store Numeral symbols as keys and add their int values against keys
- Make use of two pointers, i.e indices cur, next

while next <= max_index:
     if next_val <= cur_val, just add cur in sum and increment loop by 1
     else sum += next - cur and increment loop by 2
if cur<=max_index:
    add last element val in sum
*/


/*
Runtime: 132 ms, faster than 94.62% of JavaScript online submissions for Roman to Integer.
Memory Usage: 44.2 MB, less than 83.14% of JavaScript online submissions for Roman to Integer.
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let max_index = s.length - 1
  if (max_index < 0) {
    return -1
  }
  let dict = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }

  let cur = 0
  let next = 1
  let sum = 0
  while (next <= max_index) {
    if (dict[s[next]] <= dict[s[cur]]) {
      sum += dict[s[cur]]
      cur++
      next++
      continue
    }
    sum = sum + (dict[s[next]] - dict[s[cur]])
    cur += 2
    next += 2
  }
  if (cur <= max_index) {
    sum += dict[s[cur]]
  }
  return sum
}

let p = 'MMMCMXCIX'
let s = 'IV'
console.log(romanToInt(s))
// console.log(p[3])
