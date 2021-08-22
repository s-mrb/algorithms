const disc_log = (base, mod, remainder) => {
  let n = parseInt(Math.sqrt(mod) + 1)
  let pows = {}
  let key, desired_p, desired_q
  for (let p = 1; p <= n; p++) {
    pows[pow_mod(base, n * p, mod)] = p
  }

  for (let q = 0; q <= n; q++) {
    key = remainder * pow_mod(base, q, mod)

    if (key in pows) {
      desired_p = pows[key]
      desired_q = q
      return n * desired_p - desired_q
    }
  }

  return -1
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

// console.log(disc_log(2, 5, 3))
console.log(disc_log(3, 11, 7))

