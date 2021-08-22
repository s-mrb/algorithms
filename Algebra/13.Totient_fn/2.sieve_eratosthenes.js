/*
verify at https://primefan.tripod.com/Phi500.html
*/

/*
totient function from 1 to n
*/

const sieve = (n) => {
  let phi = new Uint8Array(n + 1)

  for (let i = 0; i <= n; i++) {
    phi[i] = i
  }

  for (let i = 2; i <= n; i++) {
    // If phi[p] is p, means p is not evaluated yet and p is a
    // prime number (similar to Sieve)
    if (phi[i] == i) {
      // extremely important step, j += i
      for (let j = i; j <= n; j += i) {
        phi[j] -= phi[j] / i
      }
    }
  }

  return phi
}

console.log(sieve(89)[89])
