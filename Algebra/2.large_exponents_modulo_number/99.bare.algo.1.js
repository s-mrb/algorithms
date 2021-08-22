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