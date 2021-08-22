/*
Find Multiplicative Modulo Inverse w.r.t mod n of all numbers(a) [1-m-1],
*/

/*
Proof:
to be written here
*/

const mod_inv = (m) => {
  let inv = []
  inv[1] = 1

  for (let i = 2; i < m; ++i) {
    inv[i] = m - ((Math.floor(m / i) * inv[m % i]) % m)
  }
  return inv
}

console.log(mod_inv(5))
