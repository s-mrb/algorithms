/*
Given a non-negative integer x, compute and return the square root of x.
Since the return type is an integer, the decimal digits are truncated,
and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.
*/


/*
Apparently formula is wrong, work only when f1 and f2 are somewhat equidistant from actual sqrt
*/

/*
Algo:

Estimation formula:

find two nums f1 and f2 such that x is product of these two
sqrt(x) = (f1 + f2) / 4 + x / (f1 + f2)

*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x == 1) {
    return 1
  }
  let f_sum
  for (let i = x / 10 - ((x / 10) % 1); ; i++) {
    if (x % i == 0) {
      console.log(i, x / i)
      f_sum = (i + x / i) / 4 + x / (i + x / i)
      break
    }
  }
  return f_sum - (f_sum % 1)
}

console.log(mySqrt(1024))

function f(n) {
  return ~~n - (~~n > n)
}
