/*
Smallest prime which my test considers non-prime is 100000007,
this is solely language restriction, you can use same algorithm
in other language (C,C++,Python) and can work for all number ranges
that those languages support


For JS (without using bigInt) this algo works upto 8-digit primes

Max 8-digit prime is 99999989
*/

/*

IDEA:

choose some integer a coprime to n
then
    pow = a^(n-1)
    pow_mod = pow % n
    if pow_mod != 1:
        return false (certain) // upto 8-digit numbers in my code
    else:
        return true (probable)

1) Implement Binary Exponentiation
2) take mod of result

OR even fast

1) Implement Binary Exponentiation with mod included
*/

// Power Mod Calculation function
const pow_mod = (
  base,
  exp,
  el = Number.MIN_SAFE_INTEGER,
  em = Number.MAX_SAFE_INTEGER,
  rl = Number.MIN_SAFE_INTEGER,
  rm = Number.MAX_SAFE_INTEGER,
  n
) => {
  if (n == 0) {
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
    return res % n
  }

  res = 1

  let is_neg
  if (exp < 0) {
    is_neg = 1
    exp = Math.abs(exp)
  }

  base = base % n
  let temp
  while (exp != 0) {
    if (exp & 1) {
      res = (res * base) % n
      temp = res * base
      if (temp > Number.MAX_SAFE_INTEGER || res <= rl || res >= rm) {
        // calculation can not be done in JS,
        // so break and return result so far or throw error
        throw new Error(
          "Can't be done, a calculation exceeds safe integer limit of JS"
        )
      }
      res = temp % n
    }
    exp >>= 1
    temp = base * base
    if (temp > Number.MAX_SAFE_INTEGER) {
      throw new Error(
        "Can't be done, a calculation exceeds safe integer limit of JS"
      )
    }
    base = temp % n
  }

  if (is_neg) {
    return 1 / res
  }
  return res
}

const isPrime = (n) => {
  let base = 1
  let gcd = null

  // find minimum a such that a and n are co-primes
  // for keeping a to minimum don't use random a generation
  // instead loop from 2.

  while (gcd != 1) {
    base += 1
    gcd = gcd_euclid(base, n)
  }

  let res = pow_mod(
    (base = base),
    (exp = n - 1),
    (el = Number.MIN_SAFE_INTEGER),
    (em = Number.MAX_SAFE_INTEGER),
    (rl = Number.MIN_SAFE_INTEGER),
    (rm = Number.MAX_SAFE_INTEGER),
    (n = n)
  )

  if (res == 1) {
    return 1
  }
  return 0
}

const gcd_euclid = (a, b) => {
  while (b != 0) {
    temp = b
    b = a % b
    a = temp
  }
  return a
}

console.log(isPrime(100000007))
