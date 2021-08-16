/*
IDEA:

phi(n) = n.(1 -1/p1).(1 -1/p2)...(1 -1/pn)
where pn = prime factor of n, 
two pn must not be equal i.e . if n is 8, there prime factorization results [2,2,2]
don't use all 2's in phi(n), just  use it once, 
phi(8) = 8 * (1-1/2)
*/

const factorize = (n) => {
  let result = n
  for (let i = 2; i * i <= n; i++) {
    while (n % i == 0) {
      n /= i
    }
    result -= result / i
  }

  if (n > 1) {
    result -= result / n
  }
  return result
}

console.log(factorize(8))
