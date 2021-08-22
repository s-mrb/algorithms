/*
WRONG: NEED DEBUGGING
*/

/*
Solution using: Summation of floor
*/

/*
EXPLANATION:

legendre_expo(num, base): returns maximum power of `base` that divided `num`, base is prime

- sum = 0
- expo = 1
- p = pow(base, expo)
- while(p<=num):
    sum += Math.floor(num/p)
    expo++
*/

const legendre_exp = (num, base) => {
  let sum = 0n
  let exp = 1n
  p = base
  while (p <= num) {
    sum += (num - (num % p)) / p
    exp++
    p = binary_expo(base, exp)
  }

  return sum
}

const binary_expo = (base, exp) => {
  let res = -2

  res = base == 1n || exp == 0n ? 1n : base == -1n ? (exp & 1n ? -1n : 1n) : res

  if (res != -2) {
    return res
  }

  res = 1n

  let is_neg
  if (exp < 0n) {
    is_neg = 1
    exp = -exp
  }

  while (exp != 0n) {
    if (exp & 1n) {
      res = res * base
    }
    exp >>= 1n
    base = base * base
  }

  if (is_neg) {
    return 1n / res
  }

  return res
}

console.log(legendre_exp(8n, 3n))
