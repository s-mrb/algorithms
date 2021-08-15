/*
taking base 2 , we get 664741 probable primes less than 10000000

To make code faster convert (a % n * b % n) % n into (a * b) % n
*/

const miller_rabin = (n) => {
  if (n == 2n) {
    return 1
  }

  if (!(n & 1n)) {
    return false
  }

  let s = 0n
  let n_less1 = n - 1n
  let d = n_less1
  let a = 2n

  while ((d & 1n) == 0) {
    d >>= 1n
    s++
  }

  let res = pow_mod(a, d, n)
  if (res == 1n || res == n_less1) {
    return true
  }
  for (let i = 1n; i <= s; i++) {
    res = ((res % n) * (res % n)) % n
    if (res == n_less1) {
      return true
    }
  }
  return false
}

const pow_mod = (base, exp, n) => {
  if (n == 0n) {
    return 'Undefined'
  }

  let res = -2

  res = base == 1n || exp == 0n ? 1n : base == -1n ? (exp & 1n ? -1n : 1n) : res

  if (res != -2) {
    return res % n
  }

  res = 1n

  let is_neg
  if (exp < 0n) {
    is_neg = 1
    exp = -exp
  }

  base %= n
  while (exp != 0n) {
    if (exp & 1n) {
      res = ((res % n) * (base % n)) % n
    }
    exp >>= 1n
    base = ((base % n) * (base % n)) % n
  }

  if (is_neg) {
    return 1n / res
  }

  return res
}

let count = 0
let start = Date.now()

for (let i = 2n; i < 1000; i++) {
  let res = miller_rabin(i)

  if (res) {
    count++
  }
}

console.log('\n', count)
console.log(Date.now() - start)
