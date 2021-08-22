/*

EXPLANATION:

Represent n! as product of prime^k, where k is max power of prime that can divide n

*/

const mod_fact = (num, mod) => {
  let primes = primes_lt_n(num)
  let e
  let res = 1

  let l
  let p
  console.log(primes)
  for (let i = 0; i < primes.length; i++) {
    l = legendre_exp(num, primes[i])
    p = pow_mod(primes[i], legendre_exp(num, primes[i]), mod)
    console.log('prime', primes[i])
    console.log('legend', l)
    console.log('pow', p)

    res = (res * pow_mod(primes[i], legendre_exp(num, primes[i]), mod)) % mod
  }

  console.log(res)
}

const legendre_exp = (num, base) => {
  let t = base
  let x = 0
  while (num) {
    num = Math.floor(num / base)
    x += num
  }
  return x
}

const binary_expo = (base, exp, n) => {
  if (n == 0) {
    return 'Undefined'
  }

  let res = -2

  res = base == 1 || exp == 0 ? 1 : base == -1 ? (exp & 1 ? -1 : 1) : res

  if (res != -2) {
    return res % n
  }

  res = 1

  let is_neg
  if (exp < 0) {
    is_neg = 1
    exp = -exp
  }

  base %= n
  while (exp != 0) {
    if (exp & 1) {
      res = res * base
    }
    exp >>= 1
    base = base * base
  }

  if (is_neg) {
    return 1 / res
  }

  return res
}

const pow_mod = (base, exp, n) => {
  if (n == 0) {
    return 'Undefined'
  }

  let res = -2

  res = base == 1 || exp == 0 ? 1 : base == -1 ? (exp & 1 ? -1 : 1) : res

  if (res != -2) {
    return res % n
  }

  res = 1

  let is_neg
  if (exp < 0) {
    is_neg = 1
    exp = -exp
  }

  base %= n
  while (exp != 0) {
    if (exp & 1) {
      res = ((res % n) * (base % n)) % n
    }
    exp >>= 1
    base = ((base % n) * (base % n)) % n
  }

  if (is_neg) {
    return 1 / res
  }

  return res
}

var primes_lt_n = function (n) {
  // auto initializes with zero
  let arr = new Uint8Array(n)

  let count = 0
  let primes = []

  for (let i = 2; i < n; i++) {
    if (arr[i] == 1) {
      continue
    }
    count++
    primes.push(i)

    for (let j = 2 * i; j < n; j = j + i) {
      // let all non-primes be flagged 1
      arr[j] = 1
    }
  }
  return primes
}

mod_fact(8, 11)
