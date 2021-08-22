// binary exponentiation algorithm

const be = (base, exp) => {
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
  while (exp) {
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
