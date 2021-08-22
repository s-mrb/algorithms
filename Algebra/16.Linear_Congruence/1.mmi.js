/*
Solution verified via https://www.wolframalpha.com/widgets/view.jsp?id=91b45cfdb68562cc2079c50c15a797c6
*/

/*
Solution of linear Congruence Equation using MMI (Multiplicative Modulo Inverse)
https://mathworld.wolfram.com/LinearCongruenceEquation.html

a*x mod n = b
IDEA:

- find g=gcd(a,m)
- if b divisible by g then solution possible else not
- divide both sides of the equation by b,
- now find x using MMI
*/

const solve_linear_cong = (a, b, m) => {
  let g = gcd(a, m)
  if (b % g) {
    throw Error('Solution does not exist')
  }

  a = a / b
  if (gcd(a, m) != 1) {
    throw Error('Use Some other Algo for solution of this problem')
  }

  return pow_mod(a, phi(m) - 1n, m)
}

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

console.log(solve_linear_cong(2n, 2n, 5n))
