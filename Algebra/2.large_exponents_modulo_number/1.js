/*
For Safe Integers correctness Verified via https://www.mtholyoke.edu/courses/quenell/s2003/ma139/js/powermod.html

*/

/*
IDEA:

Same as Binary Exponentiation
Just make use of distributive propert over modulo operation

(2^4).1 % m
= ((4)^2).1 % m
= ((4%m)^2).1%m %m 
*/


/*
For details of binary expo algo used here see 1.binary_exponentiation/2.js
works with negative numbers and take care of constraints
DOESN'T WORK WITH FRACTIONAL EXPONENT
*/

const myPow = (
  base,
  exp,
  el = Number.MIN_SAFE_INTEGER,
  em = Number.MAX_SAFE_INTEGER,
  rl = Number.MIN_SAFE_INTEGER,
  rm = Number.MAX_SAFE_INTEGER,
  mod
) => {
  if(mod==0){
    return 'Undefined'
  }
  let res = -2

  res = base == 1 || exp == 0 ? 1 : base == -1 ? (exp & 1 ? -1 : 1) : res

  res =
    exp > em
      ? base > 1
        ? Number.POSITIVE_INFINITY
        : base < 0
        ? exp & 1
          ? Number.NEGATIVE_INFINITY
          : Number.POSITIVE_INFINITY
        : 0
      : exp < el
      ? base > 1 || base < 0
        ? 0
        : Number.POSITIVE_INFINITY
      : res

  if (res != -2) {
    return res%mod
  }

  res = 1

  let is_neg
  if (exp < 0) {
    is_neg = 1
    exp = Math.abs(exp)
  }
  base = base % mod
  while (exp != 0) {
    if (exp & 1) {
      res = (res * base) % mod
      if (res <= rl || res >= rm) {
        // calculation can not be done in JS,
        // so break and return result so far
        throw new Error("Can't be done, result exceeds safe integer limit of JS")
      }
    }
    exp >>= 1
    base = (base * base) % mod
  }

  if (is_neg) {
    return 1 / res
  }

  return res
}

console.log(
  myPow(
    (base = 65),
    (exp = 12345678),
    (el = -2147483648),
    (em = 2147483647),
    (rl = -10000),
    (rm = 10000),
    (mod = 10)
  )
)
