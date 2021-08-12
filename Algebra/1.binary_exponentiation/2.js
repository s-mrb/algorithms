// A better version of 1.js
// works with negative numbers and take care of constraints
// DOESN'T WORK WITH FRACTIONAL EXPONENT

/*
Constraints, for an example see 99.z1.js

bl < base < bm
el <= exp <= em
rl <= base^exp <= rm
*/

/*
algorithm quickly terminates if
    given exponent is lower or bigger than exponent constraint (el,em)
    result achieved so far is either equal to or lower or max than result constraint (rl,rm)




*/

const myPow = (
  base,
  exp,
  el = Number.MIN_SAFE_INTEGER,
  em = Number.MAX_SAFE_INTEGER,
  rl = Number.NEGATIVE_INFINITY,
  rm = Number.POSITIVE_INFINITY
) => {
  // below two ternaries could update res to 0,-1,pos inf and neg inf
  // and if that happens we return result
  // to detect whether it happened or not we initialize res with number other than said

  let res = -2

  // if base is 1 or -1 then exponentiation need no big calculations
  res = base == 1 || exp == 0 ? 1 : base == -1 ? (exp & 1 ? -1 : 1) : res

  /*
What below ternary is doing?

if exp > em:
    if base > 1:
        ret positive inf
    elif base < 0:
        if exp & 1:
            ret neg infi
    else:
        ret pos inf
    ret 0

    if exp < em:
        if base > 1 || b < 0:
            ret 0
    ret positive infi

*/
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
      res *= base

      //   break in if if u want to avoid discrepancie due to JS Number system
      //   Works exactly Math.pow if u don't break in if
      if (res <= rl || res >= rm) {
          throw new Error("Can't be done, result exceeds safe integer limit of JS")
        // break
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

const binar_exp = (base, exp) => {
  let res = myPow(
    base,
    exp,
    (el = Number.MIN_SAFE_INTEGER),
    (em = Number.MAX_SAFE_INTEGER),
    (rl = Number.MIN_SAFE_INTEGER),
    (rm = Number.MAX_SAFE_INTEGER)
  )

  return res
}

var n = binar_exp(9, 199)
var m = Math.pow(9, 199)
console.log(n==m)
console.log(n)
console.log(m)

