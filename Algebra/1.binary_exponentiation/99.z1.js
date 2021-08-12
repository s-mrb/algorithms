// Acceptd at Leetcode but is FAULTY, for correct version view 2.js

// Negative Num and Powers included
// Doesn't handle fractional exponents

/*
Constraints

-100.0 < base < 100.0
-2^31 <= exp <= (23^1)-1
-10^4 <= base^exp <= 10^4
*/


/*
Runtime: 68 ms, faster than 95.01% of JavaScript online submissions for Pow(x, n).
Memory Usage: 40 MB, less than 46.83% of JavaScript online submissions for Pow(x, n).
*/

const myPow = (base, exp) => {
  let res = 0
  res = base == 1 || exp == 0 ? 1 : base == -1 ? (exp & 1 ? -1 : 1) : res
  res =
    exp > 2147483647
      ? Number.POSITIVE_INFINITY
      : exp < -2147483648
      ? Number.NEGATIVE_INFINITY
      : res
  if (res != 0) {
    return res
  }


  res = 1

  let is_neg
  if (exp < 0) {
    is_neg = 1
    exp = Math.abs(exp)
  }
  while (exp != 0) {
    if (exp & 1) {
      res = res * base
      if (res <= -10000 || res >= 10000) {
        break
      }
    }
    exp >>= 1
    base *= base
  }

  if (is_neg) {
    return 1 / res
  }

  return res
}

console.log(myPow(-2, 3))
