/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

https://leetcode.com/problems/climbing-stairs/
*/


/*
Runtime: 72 ms, faster than 63.63% of JavaScript online submissions for Climbing Stairs.
Memory Usage: 39.1 MB, less than 10.49% of JavaScript online submissions for Climbing Stairs.
*/

/*
NOTE

Using temp rather than array destructuring somehwhat improves speed

Runtime: 64 ms, faster than 94.76% of JavaScript online submissions for Climbing Stairs.
Memory Usage: 38.4 MB, less than 91.89% of JavaScript online submissions for Climbing Stairs.

*/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 0) {
    return 0
  }

  let one = 1
  let two = 2

  for (let i = 2; i <= n; i++) {
    ;[one, two] = [two, one + two]
  }
  return one
}

console.log(climbStairs(3))
