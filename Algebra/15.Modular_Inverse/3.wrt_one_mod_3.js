/*
Euler Theorem

Limmitations : 
a and m are coprime


IDEA:

(a^phi(m)) mod m = 1
Multiplu (a^(-1)) on both sides
(a^(-1)) * (a^phi(m)) mod m = 1 * (a^(-1)) 

(a^(phi(m)-1)) mod m = (a^(-1)) 

Just calculate left side using Mod_Pow, to get Modular Multiplicative Inverse

*/

const phi = (n) => {
  let result = n
  for (let i = 2n; i * i <= n; i++) {
    if (n % i == 0n) {
      while (n % i == 0n) {
        n /= i
      }
      result -= result / i
    }
  }

  if (n > 1n) {
    result -= result / n
  }
  return result
}

const gcd = (a, b) => {
  while (b != 0n) {
    temp = b
    b = a % b
    a = temp
  }
  return a
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

const mod_inv = (a, m) => {
  if (gcd(a, m) != 1n) {
    return -1
  }

  return pow_mod(a, phi(m) - 1n, m)
}

const a = 7n
const m = 89n
console.log(mod_inv(a, m))
