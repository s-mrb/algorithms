/*
Base and Mode must be co-prime for below code to work properly
*/

const disc_log = (base, mod, remainder) => {
  let n = parseInt(Math.sqrt(mod) + 1)
  let pows = {}
  let key, desired_p, desired_q
  let anp = 1
  let res = 1

  // find a^n
  for (let i = 0; i < n; i++) {
    anp = (((anp % mod) * base) % mod) % mod
  }
  console.log(anp, n)
  res = anp
  for (let p = 1; p <= n; p++) {
    res = (res * anp) % mod
    pows[anp] = p
  }

  let b = base
  res = 1
  key = remainder * res
  for (let q = 0; q <= n; q++) {
    if (key in pows) {
      desired_p = pows[key]
      desired_q = q
      return n * desired_p - desired_q
    }
    res = (res * b) % mod
    key = remainder * res
  }

  return -1
}

console.log(disc_log(3, 11, 7))

// console.log(disc_log(2, 9, 7))
