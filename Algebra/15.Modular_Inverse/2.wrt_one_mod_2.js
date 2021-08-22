/*
Solution using Fermat Little Theorem - 
Limmitation : for prime m and coprime a and m


IDEA:

(a^(m-1)) mod m = 1
Multiplu (a^(-1)) on both sides
(a^(-1)) * (a^(m-1)) mod m = 1 * (a^(-1)) 

(a^(m-2)) mod m = (a^(-1)) 

Just calculate left side using Mod_Pow, to get Modular Multiplicative Inverse


Todo:

why below code give wrong answer
console.log((myPow(a, m-2))

since 
a*x mod m = 1 when x is MMI

a^(m-1) mod m = 1 when gcd(a,m) = 1 and m = prime

since a^(m-1) = a * a^(m-2)

why can't we say x = a^(m-2), if so then why it gives different answer than this current solution

*/

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
  return pow_mod(a, m - 2n, m)
}
const a = 7n
const m = 89n
const e = m - 2n

console.log(mod_inv(a, m))
